using Microsoft.EntityFrameworkCore;

namespace TiendaAPI.Models
{
    public class TiendaDbContext : DbContext
    {
        public DbSet<Producto> Productos { get; set; }

        public TiendaDbContext(DbContextOptions<TiendaDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Producto>().ToTable("Producto");
        }
    }
}
