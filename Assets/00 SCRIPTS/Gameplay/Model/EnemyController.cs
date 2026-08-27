using System.Collections.Generic;
using UnityEngine;

public class EnemyController : MonoBehaviour
{
    [SerializeField] private ConfigurableJoint joint;
    [SerializeField] private GunController gun;
    [SerializeField] private HeathController heath;
    [SerializeField] private AnimationController anim;
    [SerializeField] private EnemyTrigger trigger;
    [SerializeField] private Rigidbody rigid;
    [SerializeField] private float speed;
    [SerializeField] private bool IsEnd;
    [SerializeField] private bool IsPause;
    [SerializeField] private bool IsStay;
    [SerializeField] private bool IsDeath;
    [SerializeField] private List<BodyPiece> bodyPieces;

    private void Awake()
    {
        heath.OnDeath += Death;
    }

    private void Start()
    {
        GameController.Ins.AddEnemy();

        GameController.Ins.OnPause += () =>
        {
            IsPause = true;
            rigid.isKinematic = true;
            anim.PlayAnimation("Idle");
        };
        GameController.Ins.OnResume += () =>
        {
            IsPause = false;
            if (!IsStay)
            {
                anim.PlayAnimation("Walk");
                rigid.isKinematic = false;
            }
        };
        GameController.Ins.OnEnd += () =>
        {
            IsEnd = true;
            gun.gameObject.SetActive(false);
        };
        trigger.OnTrigger += () =>
        {
            GameController.Ins.PauseGame();
            IsStay = true;
            rigid.isKinematic = true;
            BeforeAttack();
        };
        anim.PlayAnimation("Walk");
    }
    private void BeforeAttack()
    {
        if (IsEnd || IsDeath) return;
        gun.gameObject.SetActive(true);
    }

    private void Death()
    {
        if (IsDeath) return;
        IsDeath = true;
        joint.connectedBody = null;
        gun.gameObject.SetActive(false);
        anim.StopAnim();
        bodyPieces.ForEach(b => b.notUseAnim = true);
        GameController.Ins.RemoveEnemy();
    }
    private void Update()
    {
        if (IsEnd || IsDeath || IsPause) return;
        if (IsStay) gun.Action();
        else Move();
    }
    private void Move()
    {
        transform.position += Time.deltaTime * speed * Vector3.left;
    }
}