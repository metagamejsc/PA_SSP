using UnityEngine;

public class BodyPiece : MonoBehaviour
{
    [SerializeField] private Rigidbody rigid;
    [SerializeField] private Transform skeleton;
    public bool notUseAnim;
    private void Awake()
    {
        rigid = GetComponent<Rigidbody>();
    }
    private void Update()
    {
        Follow();
    }

    private void Follow()
    {
        if (!notUseAnim)
        {
            FollowSke();
        }
        else
        {
            FollowColli();
        }
    }
    private void FollowSke()
    {
        rigid.MovePosition(skeleton.position);
        rigid.MoveRotation(skeleton.rotation);
    }
    private void FollowColli()
    {
        skeleton.SetPositionAndRotation(rigid.position, rigid.rotation);
    }
}