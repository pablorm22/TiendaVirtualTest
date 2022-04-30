using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TiendaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace TiendaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly TiendaDbContext _context;

        public ProductoController(TiendaDbContext context)
        {
            _context = context;
        }
 
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Producto>>> GetProductos([FromQuery] string nombre)
        {
            if (nombre != null)
            {
                var lsProductos2 = from p in _context.Productos
                              where EF.Functions.Like(p.Nombre, nombre + "%")
                              select p;
 
                return await lsProductos2.ToListAsync();
            }
            else
            {
                return await _context.Productos.ToListAsync();
            }
        }
 
        [HttpGet("{id}")]
        public async Task<ActionResult<Producto>> GetProductoPorId(int id)
        {
            var producto = await _context.Productos.FindAsync(id);

            if (producto == null)
            {
                return NotFound();
            }

            return producto;
        }

    }
}
