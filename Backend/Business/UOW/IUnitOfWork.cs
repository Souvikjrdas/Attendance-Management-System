using Business.Repositories;

namespace Business.UOW
{
    public interface IUnitOfWork
    {
        public IAttendanceRepository EmpAttd { get; }
        public IAccountRepository arepo { get; set; }
        void SaveAllChanges();
    }
}