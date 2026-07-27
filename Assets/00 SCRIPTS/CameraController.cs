using UnityEngine;

public class CameraController : MonoBehaviour
{
    [SerializeField] private Camera cam;
    [SerializeField] private float por;
    [SerializeField] private float land;

    private float oldRatio;
    public void SetupCamera(float portrait, float landscape)
    {
        por = portrait;
        land = landscape;
    }
    private void Update()
    {
        Fit();
    }
    private void Fit()
    {
        float ratio = (float)Screen.width / Screen.height;
        if (ratio == oldRatio) return;
        if (ratio < 1)
        {
            cam.fieldOfView = por;
        }
        else
        {
            cam.fieldOfView = land;
        }
    }
}