public class FightController : OptionController
{
    protected override void DeactiveCurrent()
    {
        base.DeactiveCurrent();
        currentOption.ActiveObject.SetActive(false);
    }
    protected override void ActiveCurrent()
    {
        base.ActiveCurrent();
        currentOption.ActiveObject.SetActive(true);
    }
}