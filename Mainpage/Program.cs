using Mainpage;

namespace WebApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    //webBuilder.UseStartup<Startup>();

                    //this uses these localhost urls to open the web app
                    webBuilder.UseStartup<Startup>()
                    .UseUrls("https://localhost:3001", "http://localhost:3000");
                })
                .Build()
                .Run();
        }
    }
}