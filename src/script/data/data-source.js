// import { async } from "regenerator-runtime";
class DataSource {
	static searchUser = async (keyword) => {
		try {
			const response = await fetch(
				`https://api.github.com/search/users?q=${keyword}`
			);
			const responseJSON = await response.json();
			if (responseJSON.items.length > 0) {
				const items = responseJSON.items;
				return {
					items: items,
					count: responseJSON.items.length,
					keyword: keyword,
				};
			} else {
				return {
					items: false,
					count: responseJSON.items.length,
					keyword: keyword,
				};
			}
		} catch (error) {
			return {
				error: true,
				message: "Cek koneksi internet Anda!",
				keyword: keyword,
			};
		}
	};
}

export default DataSource;
