const API = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
	auth: {
		login: `${API}/authorization/users/login`,
		signUp: `${API}/authorization/users`,
		profile: `${API}/authorization/profile`,
	},
	movies: {
		getMovie: (id) => `${API}/api/v1/movies/${id}`,
		movies: `${API}/api/v1/movies`,
		moviesDate: (minDate, maxDate) => `${API}/api/v1/movies/filter?min_date=${minDate}&max_date=${maxDate}&order=desc`,
		filters: (queryParams) => `${API}/api/v1/movies/filter?${queryParams}`,
		search: (query) => `${API}/api/v1/movies/search?title=${query}`,
	},
};

export default endPoints;