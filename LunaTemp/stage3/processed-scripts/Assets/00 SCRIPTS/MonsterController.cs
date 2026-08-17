using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MonsterController : MonoBehaviour
{
    [SerializeField] private int maxHP;
    [SerializeField] private int currentHP;
    [SerializeField] private List<Piece> pieces;
    [SerializeField] private AudioClip deadSFX;
    [SerializeField] private Vector2 maxForce = new Vector2(1000, 1000);
    [SerializeField] private Vector2 minForce = new Vector2(200, 200);
    [SerializeField] private BalanceController balance;
    [SerializeField] private bool isDead;
    public bool IsDead => isDead;
    [SerializeField] private MonsterTrigger trigger;
    [SerializeField] private GroundCheck groundCheck;

    [Header("Move")]
    [SerializeField] private float speed;
    [SerializeField] private Rigidbody2D body;
    [SerializeField] private HingeJoint2D leftHand;
    [SerializeField] private HingeJoint2D rightHand;
    [SerializeField] private HingeJoint2D leftLeg;
    [SerializeField] private HingeJoint2D rightLeg;

    private Coroutine attack;
    private float timer;
    private void Start()
    {
        currentHP = maxHP;
    }
    private void FixedUpdate()
    {
        Move();
    }
    private void Move()
    {
        timer -= Time.fixedDeltaTime;
        if (!groundCheck.OnGround || isDead || !trigger.Player)
        {
            StopAttack();
            body.linearVelocity = new Vector2(0, body.linearVelocity.y);
            return;
        }
        StartAttack();
        Vector2 direction = trigger.Player.Body.position - body.transform.position;
        if (Mathf.Abs(direction.x) < 1f)
        {
            body.linearVelocity = new Vector2(0, 1);
            return;
        }
        int x = direction.normalized.x < 0 ? -1 : 1;
        if (timer <= 0)
        {
            timer = 1;
            transform.localScale = new Vector3(x, 1, 1);
        }

        body.linearVelocity = new Vector2(x * speed, 1);
    }
    private IEnumerator Animation()
    {
        while (!isDead)
        {
            yield return new WaitForSeconds(0.5f);
            leftHand.useMotor = true;
            leftLeg.useMotor = true;
            rightHand.useMotor = false;
            rightLeg.useMotor = false;
            yield return new WaitForSeconds(0.5f);
            leftHand.useMotor = false;
            leftLeg.useMotor = false;
            rightHand.useMotor = true;
            rightLeg.useMotor = true;
        }
    }
    public void TakeDamage(int amount)
    {
        currentHP -= amount;
        if (currentHP <= 0) Dead();
    }
    private void Dead()
    {
        if (isDead) return;
        isDead = true;
        balance.enabled = false;
        AudioController.Ins.PlaySFX(deadSFX);
        foreach (Piece p in pieces)
        {
            Vector2 force = new Vector2(Random.Range(minForce.x, maxForce.x), Random.Range(minForce.y, maxForce.y));
            if (p.Joint) p.Joint.enabled = false;
            p.Rb.AddForce(force);
        }
        GameController.Ins.RemoveCharacter(isMonster: true);
        StartCoroutine(Destroy());
    }
    private IEnumerator Destroy()
    {
        yield return new WaitForSeconds(5);
        Destroy(gameObject);
    }
    private void StartAttack()
    {
        if (attack != null) return;
        attack = StartCoroutine(Animation());
    }
    private void StopAttack()
    {
        if (attack == null) return;
        StopCoroutine(attack);
        attack = null;
        leftHand.useMotor = false;
        rightHand.useMotor = false;
        leftLeg.useMotor = false;
        rightLeg.useMotor = false;
    }
}
[System.Serializable]
public struct Piece
{
    public Joint2D Joint;
    public Rigidbody2D Rb;
}