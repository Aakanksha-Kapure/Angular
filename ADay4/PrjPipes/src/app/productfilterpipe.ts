import { analyzeAndValidateNgModules } from "@angular/compiler";
import { Pipe, PipeTransform } from "@angular/core";

//Decorator
@Pipe(
    {
        //naming the pipe
        name:'productfilterpipe'
    }
)
export class ProductFilterPipe implements PipeTransform
{
    transform(products:any,searchText:any)
    {
        if(searchText)
        {
            
            return products.filter((x: { pname: string; })=>x.pname.toLowerCase().startsWith(searchText.toLowerCase()));
            //return products
        }
    }
}