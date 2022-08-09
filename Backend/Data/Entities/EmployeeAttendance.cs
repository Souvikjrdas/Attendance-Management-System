using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Entities
{
    public class EmployeeAttendance
    {
        public int Id { get; set; }

        [Required]
        [EmailAddress]
        public string? EmployeeId { get; set; }

        [Required]
        public int HoursWorked { get; set; }

        [Required]
        public DateTime Date { get; set; }
        public string? Remarks { get; set; }

        [Required]
        public string? UserId { get; set; }
    }
}
