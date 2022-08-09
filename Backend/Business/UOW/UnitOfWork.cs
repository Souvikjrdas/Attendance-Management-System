using Business.Repositories;
using Data.MyDbContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.UOW
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext db;
        public IAttendanceRepository EmpAttd { get; private set; }
        public IAccountRepository arepo { get; set; } 

        public UnitOfWork(ApplicationDbContext _db, IAttendanceRepository rep, IAccountRepository _arepo)
        {
            db = _db;
            EmpAttd = rep;
            arepo = _arepo;
        }

        public void SaveAllChanges()
        {
            db.SaveChanges();
        }
    }
}
