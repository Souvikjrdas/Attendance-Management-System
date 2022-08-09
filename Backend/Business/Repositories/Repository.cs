using Data.MyDbContext;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Repositories
{
    public class Repository<T>  : IRepository<T> where T : class
    {
        private readonly ApplicationDbContext db;
        internal DbSet<T> dbentity;

        public Repository(ApplicationDbContext _db)
        {
            db = _db;
            dbentity = db.Set<T>();
        }

        public void Add(T ob)
        {
            dbentity.Add(ob);
        }

        public T? GetById(string id)
        {
            var id1 = Convert.ToInt32(id);
            var ob = dbentity.Find(id1);
            if (ob != null)
            {
                return ob;
            }
            return null;
        }


        public IEnumerable<T>? GetAll()
        {
            var ob = dbentity.ToArray();
            if(ob.Any())
            {
                return ob;
            }
            return null;
        }

        public void Remove(T ob)
        {
            dbentity.Remove(ob);
        }

    }
}
