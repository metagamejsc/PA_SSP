using UnityEngine;
using UnityEngine.EventSystems;

public class DefenseController : OptionController
{
    [SerializeField] private LayerMask surfaceLayer;
    [SerializeField] private LayerMask blockingLayer;
    [SerializeField] private Transform world;
    [SerializeField] private float cellSize;
    [SerializeField] private Vector3 offset;
    [SerializeField] private AudioClip putSound;
    [SerializeField] private GameObject currentBlock;
    [SerializeField] private GameObject buildTut;
    protected override void ActiveCurrent()
    {
        base.ActiveCurrent();
        ChangeBlockType(currentOption.ActiveObject);
    }
    private void ChangeBlockType(GameObject block)
    {
        if (buildTut)
        {
            buildTut.SetActive(true);
        }
        currentBlock = block;
    }
    private void CheckInput()
    {
        if (Input.touchCount > 0 &&
            Input.GetTouch(0).phase == TouchPhase.Began)
        {
            if (EventSystem.current.IsPointerOverGameObject(
                Input.GetTouch(0).fingerId))
                return;

            Ray ray = Camera.main.ScreenPointToRay(
                Input.GetTouch(0).position
            );

            if (Physics.Raycast(
                ray,
                out RaycastHit hit,
                Mathf.Infinity,
                surfaceLayer))
            {
                Action(hit.point);
            }

            return;
        }

        if (Input.GetMouseButtonDown(0))
        {
            if (EventSystem.current.IsPointerOverGameObject())
                return;

            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);

            if (Physics.Raycast(
                ray,
                out RaycastHit hit,
                Mathf.Infinity,
                surfaceLayer))
            {
                Action(hit.point);
            }
        }
    }
    private void Action([Bridge.Ref] Vector3 position)
    {
        if (!currentBlock) return;
        Build(position);
    }
    private void Update()
    {
        CheckInput();
    }
    private void Build([Bridge.Ref] Vector3 position)
    {
        position = world.InverseTransformPoint(position);

        Vector3Int cell = WorldToCell(position);
        Vector3 pos = CellToWorld(cell);

        Vector3 worldPos = world.TransformPoint(pos);

        Collider[] hits = Physics.OverlapBox(
            worldPos,
            0.5f * cellSize * Vector3.one,
            Quaternion.identity,
            blockingLayer
        );

        if (hits.Length > 0) return;
        if (buildTut) Destroy(buildTut);
        GameObject b = Instantiate(currentBlock, world);
        b.transform.localPosition = pos;
        b.SetActive(true);

        AudioController.Ins.PlaySFX(putSound);
        GameController.Ins.Click();
    }
    private Vector3Int WorldToCell([Bridge.Ref] Vector3 world)
    {
        return new Vector3Int(
            Mathf.RoundToInt((world.x - offset.x) / cellSize),
            Mathf.RoundToInt((world.y - offset.y) / cellSize),
            Mathf.RoundToInt((world.z - offset.z) / cellSize)
        );
    }
    private Vector3 CellToWorld([Bridge.Ref] Vector3Int cell)
    {
        return new Vector3(
            offset.x + cell.x * cellSize,
            offset.y + cell.y * cellSize,
            offset.z + cell.z * cellSize
        );
    }
}
