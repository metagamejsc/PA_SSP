using System.Collections;
using UnityEngine;

public class BulletController : MonoBehaviour
{
    [SerializeField] private Rigidbody rigid;
    [SerializeField] private int damage;
    [SerializeField] private float speed;
    [SerializeField] private float lifeTime;
    [SerializeField] private AudioClip hitSound;
    private float currentSpeed;
    private void OnEnable()
    {
        currentSpeed = speed;
        StartCoroutine(Life());
    }
    private void OnDisable()
    {
        StopAllCoroutines();
    }
    private void OnTriggerEnter(Collider collision)
    {
        currentSpeed = 0;
        AudioController.Ins.PlaySFX(hitSound);
        collision.transform.TryGetComponent<Damageable>(out Damageable target);
        if (target) target.TakeDamage(damage);
        gameObject.SetActive(false);
    }

    private IEnumerator Life()
    {
        yield return new WaitForSeconds(lifeTime);
        gameObject.SetActive(false);
    }
    private void FixedUpdate()
    {
        rigid.linearVelocity = transform.right * speed;
    }
}