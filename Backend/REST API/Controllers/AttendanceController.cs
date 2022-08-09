using AutoMapper;
using Business.UOW;
using Data.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using REST_API.Helpers.DTO;

namespace REST_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttendanceController : ControllerBase
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper map;
        private  Message mssg ;
        public AttendanceController(IUnitOfWork _uow , IMapper _map)
        {
            uow = _uow;
            map = _map;
            mssg = new Message();
        }




        [HttpGet("GetAllAttendance")]                                                                      //Get All attendance

        public IActionResult GetAll()
        {
            var res = uow.EmpAttd.GetAll();
            if(res != null)
            {
                return Ok(res);
            }
            return Ok(null);
        }




        [HttpGet("GetAttendance/{id}")]                                                                     //Get attendance by id

        public IActionResult GetById(string id)
        {
            var res = uow.EmpAttd.GetById(id);
            if(res != null)
            {
                return Ok(res);
            }
            //mssg.Info = "Attendance not found";
            //return NotFound(mssg);
            return Ok(null);
        }




        [HttpGet("GetAttendance")]                                                                      //Get Attndance By UserId

        public IActionResult GetByUserId(string userId)
        {
            var res = uow.EmpAttd.GetAllByUserID(userId);
            if(res != null)
            {
                return Ok(res);
            }
            //mssg.Info = "Attendance not found";
            return Ok(null);

        }



        [HttpPost("AddAttendance")]

        public IActionResult AddAttendance (AttendanceDTO ob)
        {
            try
            {
                //logic to check same date is not assigned
                var res = uow.EmpAttd.GetAll();
                if (res != null)
                {
                    var exists = res.Where(item => item.UserId == ob.UserId && item.Date == ob.Date).ToArray();
                    if (exists.Any())
                    {
                        mssg.Info = "Attendance already marked for the given date!" + ob.Date;
                        return Ok(mssg);
                    }
                }
                var ob1 = map.Map<EmployeeAttendance>(ob);
                uow.EmpAttd.Add(ob1);
                uow.SaveAllChanges();
            }
            catch (Exception error)
            {
                mssg.Info = error.Message;
                return Ok(mssg);
            }
            mssg.Info = ("Attendance marked!");
            return Ok(mssg);
        }


        [HttpPut("EditAttendance/{id}")]

        public IActionResult EditAttendance (AttendanceEditDTO ob , string id)
        {
            if(id != null)
            {
                var ob1 = uow.EmpAttd.GetById(id);
                if(ob1 != null)
                {
                    //ob.Id = Convert.ToInt32(id);
                    map.Map(ob, ob1);
                    uow.SaveAllChanges();
                    mssg.Info = "Attendance updated successfully!";
                    return Ok(mssg);
                }
                mssg.Info = "No attendance matched for "+ id;
                return Ok(mssg);
            }
            mssg.Info = "Invalid data entered";
            return Ok(mssg);
        }




        [HttpDelete("DeleteAttendance/{id}")]

        public IActionResult DeleteAttendance (string id)
        {
            if(id != null)
            {
                var ob = uow.EmpAttd.GetById(id);
                if(ob != null)
                {
                    uow.EmpAttd.Remove(ob);
                    uow.SaveAllChanges();
                    mssg.Info = "Attendance Deleted!";
                    return Ok(mssg);
                }
                else
                {
                    mssg.Info = "Attendance not found!";
                    return Ok(mssg);

                }
            }
            mssg.Info = "Invalid id";
            return Ok(mssg);
        }

    }
}
