using UnityEngine;

public class AnimationController : MonoBehaviour
{
    [SerializeField] private Animator animator;
    private const string STRING_EMPTY = "";
    public void PlayAnimation(string key)
    {
        if (key == STRING_EMPTY) return;
        animator.SetTrigger(key);
    }
    public void StopAnim()
    {
        animator.enabled = false;
    }
}