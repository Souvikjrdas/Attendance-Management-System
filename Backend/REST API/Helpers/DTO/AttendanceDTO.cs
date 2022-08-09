namespace REST_API.Helpers.DTO
{
    public class AttendanceDTO
    {

        public string? EmployeeId { get; set; }

        public int HoursWorked { get; set; }

        public string? Remarks { get; set; }

        public DateTime Date { get; set; }
        public string? UserId { get; set; }
        
       

    }
}
