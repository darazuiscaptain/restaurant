using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestourantAPI.Models;

namespace RestourantAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderMasterController : ControllerBase
    {
        private readonly RestourantDbContext _context;

        public OrderMasterController(RestourantDbContext context)
        {
            _context = context;
        }

        // GET: api/OrderMaster
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrderMaster>>> GetOrderMasters()
        {
            return await _context.OrderMasters.ToListAsync();
        }

        // GET: api/OrderMaster/5
        [HttpGet("{id}")]
        public async Task<ActionResult<OrderMaster>> GetOrderMaster(long id)
        {
            var orderMaster = await _context.OrderMasters.FindAsync(id);

            if (orderMaster == null)
            {
                return NotFound();
            }

            return orderMaster;
        }

        // PUT: api/OrderMaster/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrderMaster(long id, OrderMaster orderMaster)
        {
            if (id != orderMaster.OrderMasterId)
            {
                return BadRequest();
            }

            _context.Entry(orderMaster).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderMasterExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/OrderMaster
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<OrderMaster>> PostOrderMaster(OrderMaster orderMaster)
        {
            _context.OrderMasters.Add(orderMaster);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrderMaster", new { id = orderMaster.OrderMasterId }, orderMaster);
        }

        // DELETE: api/OrderMaster/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrderMaster(long id)
        {
            var orderMaster = await _context.OrderMasters.FindAsync(id);
            if (orderMaster == null)
            {
                return NotFound();
            }

            _context.OrderMasters.Remove(orderMaster);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OrderMasterExists(long id)
        {
            return _context.OrderMasters.Any(e => e.OrderMasterId == id);
        }
    }
}
