
export interface Location{
    street:{
        number:string,
        name:string
    },
    city:string,
    state:string,
    country:string,
    coordinates:{
        longitude:string, 
        latitude:string
    }
}

export interface Name{
    title?:string,
    first:string,
    last:string
}


export interface User{
    login:{
        uuid:string
    },
    name:Name,
    gender:string,
    picture:{
        large:string,
        medium:string,
        thumbnail:string
    },
    email:string,
    location:Location
}

export interface HourlyWeather {
    time: string[]; 
    temperature_2m: number[];
  }
  
export interface WeatherResponse {
    hourly: HourlyWeather;
  }

export interface Temperature{
    current:number,
    lowest:number,
    highest:number
}

export interface Weather{
    iconCode:number,
    temperature:Temperature,
    description:string
}