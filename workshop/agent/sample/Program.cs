using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace Sample
{
    public class Program
    {
        // Entry point for the application
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        // Configures and creates the host builder
        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
