using System.IO;
using System.Text;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing.Matching;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;

namespace Module27.LifeSpot
{
   public class Startup
   {
       public void ConfigureServices(IServiceCollection services)
       {
       }
 
       public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
       {
           if (env.IsDevelopment())
               app.UseDeveloperExceptionPage();
 
           app.UseRouting();
           
           app.UseEndpoints(endpoints =>
           {
               endpoints.MapCss();
               endpoints.MapJs();
               endpoints.MapHtml();
               endpoints.MapImg();
           });
           app.UseStaticFiles();
           app.UseStaticFiles(new StaticFileOptions
           {
               FileProvider = new PhysicalFileProvider(
                   Path.Combine(env.ContentRootPath, @"Data")), // указываем физический путь до папки с файлами
               RequestPath = "/images" // запросы по этому url будут будут соотносится с файлами из указанной директории
           });
       }
   }
}