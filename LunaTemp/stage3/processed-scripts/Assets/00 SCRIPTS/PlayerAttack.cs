using System.Collections;
using UnityEngine;

public class PlayerAttack : MonoBehaviour
{
    [SerializeField] private HingeJoint2D left;
    [SerializeField] private HingeJoint2D right;
    [SerializeField] private Transform gun;
    [SerializeField] private GameObject bulletPrefab;
    [SerializeField] private bool onCD;
    [SerializeField] private AudioClip shootSound;
    [LunaPlaygroundField("Shoot CD"), Min(0.1f)] public float ShootCD;
    private Coroutine animationCoroutine;
    [SerializeField] private float timeMotor;
    [SerializeField] private PlayerTrigger playerTrigger;

    [SerializeField] private PlayerController player;
    private bool dropGun;
    private void Start()
    {
        player.OnDead += DropGun;
    }
    private void Update()
    {
        Shoot();
    }

    private void Shoot()
    {
        if (dropGun || onCD) return;
        if (!playerTrigger.Monster)
        {
            StopShoot();
            return;
        }
        animationCoroutine = animationCoroutine ?? StartCoroutine(Animation());
        SpawnBullet();
    }
    private void DropGun()
    {
        dropGun = true;
        gun.transform.parent.gameObject.AddComponent<Rigidbody2D>();
        StopShoot();
    }
    private IEnumerator Animation()
    {
        while (true)
        {
            left.useMotor = true;
            right.useMotor = true;
            yield return new WaitForSeconds(timeMotor);
            left.useMotor = false;
            right.useMotor = false;
            yield return new WaitForSeconds(timeMotor);
        }
    }
    private IEnumerator WaitForCD()
    {
        onCD = true;
        yield return new WaitForSeconds(ShootCD);
        onCD = false;
    }
    private void SpawnBullet()
    {
        PoolController.Ins.SpawnObj(bulletPrefab, gun.position, gun.rotation);
        AudioController.Ins.PlaySFX(shootSound);
        StartCoroutine(WaitForCD());
    }

    public void StopShoot()
    {
        if (animationCoroutine == null) return;
        StopCoroutine(animationCoroutine);
        animationCoroutine = null;
    }
}