using System.Collections.Generic;
using UnityEngine;

public class CharacterController : MonoBehaviour
{
    [SerializeField] private HeathController heath;
    [SerializeField] private Rigidbody body;
    [SerializeField] private AnimationController anim;
    [SerializeField] private List<BodyPiece> bodyPieces;
    [SerializeField] private List<GameObject> weapons;
    private bool IsDeath;
    private void Awake()
    {
        heath.OnDeath += Death;
    }
    private void Start()
    {
        GameController.Ins.AddPlayer();
    }
    private void Death()
    {
        if (IsDeath) return;
        IsDeath = true;
        if (weapons.Count > 0) weapons.ForEach(w => w.SetActive(false));
        body.isKinematic = false;
        anim.StopAnim();
        bodyPieces.ForEach(b => b.notUseAnim = true);
        GameController.Ins.RemovePlayer();
    }
}