using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [SerializeField] private List<BodyRenderer> bodyRenderers;
    [SerializeField] private AudioClip biteSound;
    [SerializeField] private AudioClip zombieSound;
    [SerializeField] private Transform body;
    public Transform Body => body;
    public bool IsZombie;
    public void Zombie()
    {
        if (IsZombie) return;
        IsZombie = true;
        AudioController.Ins.PlaySFX(biteSound);
        StartCoroutine(Dead());
    }
    private IEnumerator Dead()
    {
        yield return new WaitForSeconds(1);
        OnDead?.Invoke();
        foreach (BodyRenderer r in bodyRenderers)
        {
            r.Renderer.sprite = r.ZSprite;
            r.Renderer.gameObject.layer = LayerMask.NameToLayer("Monster");
        }
        AudioController.Ins.PlaySFX(zombieSound);
        GameController.Ins.RemoveCharacter(isMonster: false);
    }
    public Action OnDead;
}
[System.Serializable]
public struct BodyRenderer
{
    public SpriteRenderer Renderer;
    public Sprite ZSprite;
}
