using Data.Entities;

namespace Business.Repositories
{
    public interface IAttendanceRepository : IRepository<EmployeeAttendance>
    {
        void Update(EmployeeAttendance ob);
        IEnumerable<EmployeeAttendance>? GetAllByUserID(string userId);
        //EmployeeAttendance? GetByEmailDate(string email, string date);

    }
}