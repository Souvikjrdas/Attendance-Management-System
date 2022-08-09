using AutoMapper;
using Data.Entities;
using REST_API.Helpers.DTO;

namespace REST_API.Helpers.Mappers
{
    public class APIMapProfile : Profile
    {
        public APIMapProfile()
        {
            CreateMap<AttendanceDTO,EmployeeAttendance>().ReverseMap();
            CreateMap<AttendanceEditDTO,EmployeeAttendance>().ReverseMap();
            CreateMap<ApplicationIdentityUser, UsersDTO>().ReverseMap();
            CreateMap<EmployeeAttendance,GetAttendanceDTO>().ReverseMap();
        }
    }
}
