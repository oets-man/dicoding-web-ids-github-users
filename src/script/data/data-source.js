import { async } from "regenerator-runtime";
class DataSource {
	static searchClub = async (keyword) => {
		try {
			const response = await fetch(
				`https://api.github.com/search/users?q=${keyword}`
			);
			const responseJSON = await response.json();
			if (responseJSON.total_count > 0) {
				const items = responseJSON.items;
				return items;
			} else {
				return `${keyword} tidak ditemukan!`;
			}
		} catch (error) {
			("Cek koneksi internet");
		}
	};
}

export default DataSource;
