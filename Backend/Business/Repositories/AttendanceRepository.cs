using Data.Entities;
using Data.MyDbContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Repositories
{
    public class AttendanceRepository : Repository<EmployeeAttendance> , IAttendanceRepository
    {
        private readonly ApplicationDbContext db;
        public AttendanceRepository(ApplicationDbContext _db) : base(_db)
        {
            db = _db;

        }
         public void Update(EmployeeAttendance ob)
         {
            db.Attendance.Update(ob);
         }

         public IEnumerable<EmployeeAttendance>? GetAllByUserID(string userId)            //return all records by EmployeeId ie. email
         {
            if(userId != null)
            {
                var ob = db.Attendance.Where(item => item.UserId == userId).ToArray();
                if(ob.Any())
                {
                    return ob;
                }
                return null;
            }
            return null;
         }


        //public EmployeeAttendance? GetByEmailDate(string userId,string date)
        //{
        //    var MyDate = Convert.ToDateTime(date);
        //    var ob = db.Attendance.Where(item => item.UserId == userId && item.Date == MyDate).FirstOrDefault();
        //    if (ob != null)
        //    {
        //        return ob;
        //    }
        //    return null;
        //}

    }
}
