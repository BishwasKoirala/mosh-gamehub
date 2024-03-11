import useData from "./useData";

export interface Platform {
  id: string;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useData<Platform>("/platforms/lists/parents");
};

export default usePlatforms;
