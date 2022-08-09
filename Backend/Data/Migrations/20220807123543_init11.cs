using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data.Migrations
{
    public partial class init11 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Role",
                table: "Attendance");

            migrationBuilder.AddColumn<string>(
                name: "Remarks",
                table: "Attendance",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Remarks",
                table: "Attendance");

            migrationBuilder.AddColumn<string>(
                name: "Role",
                table: "Attendance",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
