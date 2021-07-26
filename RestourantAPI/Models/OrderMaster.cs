using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RestourantAPI.Models
{
    public class OrderMaster
    {
        [Key]
        public long OrderMasterId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string OrderNumber { get; set; }

        public int CustomerId { get; set; }

        public Customer Customer { get; set; }


        [Column(TypeName = "nvarchar(100)")] 
        public string PMethod { get; set; }

        public decimal GTotatl { get; set; }

        public List<OrderDetail> OrderDetails{ get; set; }

    }
}
