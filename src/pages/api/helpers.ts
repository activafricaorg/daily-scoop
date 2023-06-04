import https from "https";

const getHTML = async(hostname: string, path: string): Promise<string> => {
	return new Promise((resolve, reject) => {
		https.get({ hostname, path, method: "GET"}, (res) => {
			let html = "";
			res.on("data", (chunk) => {
				html += chunk;
			});
			res.on("end", () => {
				resolve(html);
			})
		}).on("error", (err) => {
			console.error(err);
			reject(err);
		})
	})
}

export { getHTML }