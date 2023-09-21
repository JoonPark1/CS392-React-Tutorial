import {useQuery} from "@tanstack/react-query";

const fetchJson = async (url) => {
    const resp = await fetch(url); 
    if(!resp.ok) throw resp; 
    return resp.json(); 
}

export const useJsonQuery = (url) => {
    const {data, isLoading, error} = useQuery([url], () => fetchJson(url));
    return [data, isLoading, error]; 
}