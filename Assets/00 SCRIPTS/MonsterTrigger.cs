using UnityEngine;

public class MonsterTrigger : MonoBehaviour
{
    [SerializeField] private PlayerController player;
    public PlayerController Player => player;
    private void OnTriggerStay2D(Collider2D collision)
    {
        if (player && !player.IsZombie) return;
        collision.transform.parent.TryGetComponent<PlayerController>(out PlayerController p);
        if (!p || p.IsZombie)
        {
            player = null;
            return;
        }

        player = p;
    }
    private void OnTriggerExit2D(Collider2D collision)
    {
        if (!player) return;
        if (collision.transform.parent.gameObject == player.gameObject) player = null;
    }
}