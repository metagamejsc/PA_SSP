using UnityEngine;

public class DragController : MonoBehaviour
{
    [SerializeField] private Dragable currentTarget;
    [SerializeField] private float positionSpring;
    [SerializeField] private float positionDamper;
    private Rigidbody dragRb;
    private ConfigurableJoint joint;
    private float distance;

    private void Update()
    {
        CheckInput();
    }
    private void FixedUpdate()
    {
        MoveInput();

    }
    private void CheckInput()
    {

        if (Input.GetMouseButtonDown(0))
        {
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            RaycastHit[] hits = Physics.RaycastAll(ray);
            for (int i = 0; i < hits.Length; i++)
            {
                if (hits[i].collider.CompareTag("Dragable"))
                {
                    dragRb = hits[i].rigidbody;
                    joint = gameObject.AddComponent<ConfigurableJoint>();
                    joint.connectedBody = dragRb;

                    Vector3 localAnchor = dragRb.transform.InverseTransformPoint(hits[i].point);
                    joint.anchor = Vector3.zero;
                    joint.autoConfigureConnectedAnchor = false;
                    joint.connectedAnchor = localAnchor;

                    joint.xMotion = ConfigurableJointMotion.Locked;
                    joint.yMotion = ConfigurableJointMotion.Locked;
                    joint.zMotion = ConfigurableJointMotion.Locked;

                    JointDrive drive = new JointDrive
                    {
                        positionSpring = positionSpring,
                        positionDamper = positionDamper,
                        maximumForce = Mathf.Infinity
                    };
                    joint.xDrive = drive;
                    joint.yDrive = drive;
                    joint.zDrive = drive;

                    currentTarget = hits[i].collider.GetComponent<Dragable>();
                    distance = hits[i].distance;
                    break;
                }
                Debug.Log(hits[i].collider.name);
            }
        }
        if (Input.GetMouseButtonUp(0))
        {
            if (currentTarget) currentTarget.EndMove();
            currentTarget = null;
            if (joint)
            {
                Destroy(joint);
                joint = null;
                dragRb = null;
            }
            transform.position = Vector3.zero;
        }
    }
    private void MoveInput()
    {
        if (!currentTarget) return;
        currentTarget.StartMove();
        Vector3 pos = Input.mousePosition;
        pos.z = distance;
        //currentTarget.Move(Camera.main.ScreenToWorldPoint(pos));
        transform.position = Camera.main.ScreenToWorldPoint(pos);
    }
}