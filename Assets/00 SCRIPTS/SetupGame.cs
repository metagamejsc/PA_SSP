using UnityEngine;

public class SetupGame : MonoBehaviour
{
    [Header("Phase 1")]
    [SerializeField] private MonsterController red1;
    [SerializeField] private MonsterController orange1;

    [SerializeField] private TargetJoint2D human1;
    [SerializeField] private TargetJoint2D red1_0;
    [SerializeField] private TargetJoint2D orange1_0;

    [Header("Phase 2")]
    [SerializeField] private MonsterController red2;
    [SerializeField] private MonsterController orange2;
    [SerializeField] private TargetJoint2D human2;
    [SerializeField] private TargetJoint2D red2_0;
    [SerializeField] private TargetJoint2D orange2_0;

    [Header("Phase 3")]
    [SerializeField] private MonsterController red3_1;
    [SerializeField] private MonsterController red3_2;

    [SerializeField] private MonsterController orange3_1;
    [SerializeField] private MonsterController orange3_2;

    [SerializeField] private GameObject human3;
    [SerializeField] private GameObject red3_0;
    [SerializeField] private GameObject orange3_0;

    [SerializeField] private TargetController target;

    public void SetupMonster(bool redLeft, bool useHuman)
    {
        if (redLeft)
        {
            GameController.Ins.AddMonster(red1);
            GameController.Ins.AddMonster(red2);

            red1.gameObject.SetActive(true);
            red2.gameObject.SetActive(true);
            red3_1.gameObject.SetActive(true);
            red3_2.gameObject.SetActive(true);

        }
        else
        {
            GameController.Ins.AddMonster(orange1);
            GameController.Ins.AddMonster(orange2);

            orange1.gameObject.SetActive(true);
            orange2.gameObject.SetActive(true);
            orange3_1.gameObject.SetActive(true);
            orange3_2.gameObject.SetActive(true);
        }
        if (useHuman)
        {
            target.AddTarget(human1);
            target.AddTarget(human2);

            human1.transform.parent.gameObject.SetActive(true);
            human2.transform.parent.gameObject.SetActive(true);
            human3.SetActive(true);
        }
        else
        {
            if (redLeft)
            {
                target.AddTarget(orange1_0);
                target.AddTarget(orange2_0);

                orange1_0.transform.parent.gameObject.SetActive(true);
                orange2_0.transform.parent.gameObject.SetActive(true);
                orange3_0.SetActive(true);
            }
            else
            {
                target.AddTarget(red1_0);
                target.AddTarget(red2_0);

                red1_0.transform.parent.gameObject.SetActive(true);
                red2_0.transform.parent.gameObject.SetActive(true);
                red3_0.SetActive(true);
            }
        }
    }
}