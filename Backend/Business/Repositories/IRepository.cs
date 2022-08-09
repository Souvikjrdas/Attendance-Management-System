namespace Business.Repositories
{
    public interface IRepository<T> where T : class
    {
        T? GetById(string id);

        void Add(T ob);

        IEnumerable<T>? GetAll();

        void Remove(T ob);

    }
}