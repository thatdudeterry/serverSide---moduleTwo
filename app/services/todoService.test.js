const axios = require("axios");
jest.mock("axios");
require("dotenv").config();

describe("API Tests", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	console.log("Mocks cleared");

	test("Should return limited data based on query", async () => {
		const mockLimitedData = {
			data: [
				{ id: "66c50b56ced82b6a6ff46e63", name: "TEST-TEST", height: 123 },
				{ id: "66cbe50e7b86541dc6202e3b", name: "TEST-TEST6", height: 99 },
			],
		};

		axios.get.mockResolvedValue(mockLimitedData);

		const result = await axios.get(
			`${process.env.todosURL}?limit=2&select=name,height`
		);

		expect(result.data).toHaveLength(2);
		expect(result.data[0].name).toEqual("TEST-TEST");
		expect(result.data[0].height).toEqual(123);
		expect(result.data[1].name).toEqual("TEST-TEST6");
		expect(result.data[1].height).toEqual(99);
	});
});

describe("API Tests", () => {
	test("Should return paginated data with skip and limit", async () => {
		const mockPaginatedData = {
			data: [
				{ id: "66cb5196261ea0da262064e4", name: "TEST-TEST1", height: 12 },
				{ id: "66cb519f261ea0da262064e6", name: "TEST-TEST2", height: 23 },
			],
		};

		axios.get.mockResolvedValue(mockPaginatedData);

		const result = await axios.get(`${process.env.todosURL}?skip=2&limit=2`);

		expect(result.data).toHaveLength(2);
		expect(result.data[0].name).toEqual("TEST-TEST1");
		expect(result.data[1].name).toEqual("TEST-TEST2");
	});
});

describe("API Tests", () => {
	test("Should return data sorted in ascending order", async () => {
		const mockSortedAscData = {
			data: [
				{ id: "66c50b56ced82b6a6ff46e63", name: "TEST-TEST", height: 123 },
				{ id: "66cbe50e7b86541dc6202e3b", name: "TEST-TEST6", height: 99 },
			],
		};

		axios.get.mockResolvedValue(mockSortedAscData);

		const result = await axios.get(`${process.env.todosURL}?sort=name,asc`);

		expect(result.data[0].name).toEqual("TEST-TEST");
		expect(result.data[1].name).toEqual("TEST-TEST6");
	});

	test("Should return data sorted in descending order", async () => {
		const mockSortedDescData = {
			data: [
				{ id: "66cbe50e7b86541dc6202e3b", name: "TEST-TEST6", height: 99 },
				{ id: "66c50b56ced82b6a6ff46e63", name: "TEST-TEST", height: 123 },
			],
		};

		axios.get.mockResolvedValue(mockSortedDescData);

		const result = await axios.get(`${process.env.todosURL}?sort=name,desc`);

		expect(result.data[0].name).toEqual("TEST-TEST6");
		expect(result.data[1].name).toEqual("TEST-TEST");
	});
});
