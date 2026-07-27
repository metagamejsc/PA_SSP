using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TakeDamage : MonoBehaviour
{
    [SerializeField] private Transform phase;
    [SerializeField] private List<BodyPiece> bodyPieces;
    [SerializeField] private Rigidbody root;
    [SerializeField] private float timeCD = 0.5f;
    [SerializeField] private float HP;
    [SerializeField] private bool onCD;
    [SerializeField] private float currentHP;
    [SerializeField] private bool isDead;
    [SerializeField] private Animator anim;
    [SerializeField] private AudioClip hitSound;
    [SerializeField] private AudioClip deadSound;
    [SerializeField] private GameObject bloodPrefab;

    void Start()
    {
        currentHP = HP;
    }


    private void TakeDmg()
    {
        if (onCD || isDead) return;
        StartCoroutine(CD());
        AudioController.Ins.PlaySFX(hitSound);
        root.AddForce(Vector2.one * 100, ForceMode.Acceleration);
        currentHP--;
        SpawnBlood(root.transform.position);
        if (currentHP <= 0) Dead();
    }
    private void SpawnBlood(Vector3 pos)
    {
        pos.y = -5;
        GameObject blood = Instantiate(bloodPrefab, pos, Quaternion.identity);
        blood.transform.SetParent(phase);
    }
    private void Dead()
    {
        isDead = true;
        anim.enabled = false;
        AudioController.Ins.PlaySFX(deadSound);

        foreach (var p in bodyPieces)
        {
            p.notUseAnim = true;
        }
        GameController.Ins.EndPhase();
    }
    private IEnumerator CD()
    {
        onCD = true;
        yield return new WaitForSeconds(0.5f);
        onCD = false;
    }

    private void OnTriggerEnter(Collider collision)
    {
        if (!collision.gameObject.CompareTag("Dragable")) return;
        TakeDmg();
    }

}
