const genres = [
	{
		id: "27",
		kind: "demographic",
		name: "Shounen",
		russian: "Сёнен",
	},
	{
		id: "25",
		kind: "demographic",
		name: "Shoujo",
		russian: "Сёдзё",
	},
	{
		id: "42",
		kind: "demographic",
		name: "Seinen",
		russian: "Сэйнэн",
	},
	{
		id: "43",
		kind: "demographic",
		name: "Josei",
		russian: "Дзёсей",
	},
	{
		id: "15",
		kind: "demographic",
		name: "Kids",
		russian: "Детское",
	},
	{
		id: "198",
		kind: "theme",
		name: "Villainess",
		russian: "Злодейка",
	},
	{
		id: "197",
		kind: "theme",
		name: "Urban Fantasy",
		russian: "Городское фэнтези",
	},
	{
		id: "4",
		kind: "genre",
		name: "Comedy",
		russian: "Комедия",
	},
	{
		id: "9",
		kind: "genre",
		name: "Ecchi",
		russian: "Этти",
	},
	{
		id: "10",
		kind: "genre",
		name: "Fantasy",
		russian: "Фэнтези",
	},
	{
		id: "14",
		kind: "genre",
		name: "Horror",
		russian: "Ужасы",
	},
	{
		id: "1",
		kind: "genre",
		name: "Action",
		russian: "Экшен",
	},
	{
		id: "5",
		kind: "genre",
		name: "Avant Garde",
		russian: "Авангард",
	},
	{
		id: "36",
		kind: "genre",
		name: "Slice of Life",
		russian: "Повседневность",
	},
	{
		id: "22",
		kind: "genre",
		name: "Romance",
		russian: "Романтика",
	},
	{
		id: "7",
		kind: "genre",
		name: "Mystery",
		russian: "Тайна",
	},
	{
		id: "543",
		kind: "genre",
		name: "Gourmet",
		russian: "Гурман",
	},
	{
		id: "117",
		kind: "genre",
		name: "Suspense",
		russian: "Триллер",
	},
	{
		id: "24",
		kind: "genre",
		name: "Sci-Fi",
		russian: "Фантастика",
	},
	{
		id: "133",
		kind: "genre",
		name: "Boys Love",
		russian: "Сёнен-ай",
	},
	{
		id: "30",
		kind: "genre",
		name: "Sports",
		russian: "Спорт",
	},
	{
		id: "37",
		kind: "genre",
		name: "Supernatural",
		russian: "Сверхъестественное",
	},
	{
		id: "8",
		kind: "genre",
		name: "Drama",
		russian: "Драма",
	},
	{
		id: "2",
		kind: "genre",
		name: "Adventure",
		russian: "Приключения",
	},
	{
		id: "129",
		kind: "genre",
		name: "Girls Love",
		russian: "Сёдзё-ай",
	},
	{
		id: "539",
		kind: "genre",
		name: "Erotica",
		russian: "Эротика",
	},
	{
		id: "12",
		kind: "genre",
		name: "Hentai",
		russian: "Хентай",
	},
	{
		id: "134",
		kind: "theme",
		name: "Childcare",
		russian: "Забота о детях",
	},
	{
		id: "20",
		kind: "theme",
		name: "Parody",
		russian: "Пародия",
	},
	{
		id: "142",
		kind: "theme",
		name: "Performing Arts",
		russian: "Исполнительское искусство",
	},
	{
		id: "148",
		kind: "theme",
		name: "Pets",
		russian: "Питомцы",
	},
	{
		id: "135",
		kind: "theme",
		name: "Magical Sex Shift",
		russian: "Магическая смена пола",
	},
	{
		id: "143",
		kind: "theme",
		name: "Anthropomorphic",
		russian: "Антропоморфизм",
	},
	{
		id: "102",
		kind: "theme",
		name: "Team Sports",
		russian: "Командный спорт",
	},
	{
		id: "107",
		kind: "theme",
		name: "Love Polygon",
		russian: "Любовный многоугольник",
	},
	{
		id: "38",
		kind: "theme",
		name: "Military",
		russian: "Военное",
	},
	{
		id: "32",
		kind: "theme",
		name: "Vampire",
		russian: "Вампиры",
	},
	{
		id: "145",
		kind: "theme",
		name: "Idols (Female)",
		russian: "Идолы (Жен.)",
	},
	{
		id: "40",
		kind: "theme",
		name: "Psychological",
		russian: "Психологическое",
	},
	{
		id: "141",
		kind: "theme",
		name: "Survival",
		russian: "Выживание",
	},
	{
		id: "106",
		kind: "theme",
		name: "Reincarnation",
		russian: "Реинкарнация",
	},
	{
		id: "144",
		kind: "theme",
		name: "Crossdressing",
		russian: "Кроссдрессинг",
	},
	{
		id: "119",
		kind: "theme",
		name: "CGDCT",
		russian: "CGDCT",
	},
	{
		id: "147",
		kind: "theme",
		name: "Medical",
		russian: "Медицина",
	},
	{
		id: "17",
		kind: "theme",
		name: "Martial Arts",
		russian: "Боевые искусства",
	},
	{
		id: "18",
		kind: "theme",
		name: "Mecha",
		russian: "Меха",
	},
	{
		id: "21",
		kind: "theme",
		name: "Samurai",
		russian: "Самураи",
	},
	{
		id: "23",
		kind: "theme",
		name: "School",
		russian: "Школа",
	},
	{
		id: "29",
		kind: "theme",
		name: "Space",
		russian: "Космос",
	},
	{
		id: "35",
		kind: "theme",
		name: "Harem",
		russian: "Гарем",
	},
	{
		id: "151",
		kind: "theme",
		name: "Love Status Quo",
		russian: "Романтический подтекст",
	},
	{
		id: "31",
		kind: "theme",
		name: "Super Power",
		russian: "Супер сила",
	},
	{
		id: "13",
		kind: "theme",
		name: "Historical",
		russian: "Исторический",
	},
	{
		id: "3",
		kind: "theme",
		name: "Racing",
		russian: "Гонки",
	},
	{
		id: "124",
		kind: "theme",
		name: "Mahou Shoujo",
		russian: "Махо-сёдзё",
	},
	{
		id: "150",
		kind: "theme",
		name: "Idols (Male)",
		russian: "Идолы (Муж.)",
	},
	{
		id: "103",
		kind: "theme",
		name: "Video Game",
		russian: "Видеоигры",
	},
	{
		id: "149",
		kind: "theme",
		name: "Educational",
		russian: "Образовательное",
	},
	{
		id: "139",
		kind: "theme",
		name: "Workplace",
		russian: "Работа",
	},
	{
		id: "136",
		kind: "theme",
		name: "Showbiz",
		russian: "Шоу-бизнес",
	},
	{
		id: "114",
		kind: "theme",
		name: "Award Winning",
		russian: "Удостоено наград",
	},
	{
		id: "105",
		kind: "theme",
		name: "Gore",
		russian: "Жестокость",
	},
	{
		id: "140",
		kind: "theme",
		name: "Iyashikei",
		russian: "Иясикэй",
	},
	{
		id: "19",
		kind: "theme",
		name: "Music",
		russian: "Музыка",
	},
	{
		id: "112",
		kind: "theme",
		name: "Gag Humor",
		russian: "Гэг-юмор",
	},
	{
		id: "146",
		kind: "theme",
		name: "High Stakes Game",
		russian: "Игра с высокими ставками",
	},
	{
		id: "6",
		kind: "theme",
		name: "Mythology",
		russian: "Мифология",
	},
	{
		id: "118",
		kind: "theme",
		name: "Combat Sports",
		russian: "Спортивные единоборства",
	},
	{
		id: "137",
		kind: "theme",
		name: "Otaku Culture",
		russian: "Культура отаку",
	},
	{
		id: "111",
		kind: "theme",
		name: "Time Travel",
		russian: "Путешествие во времени",
	},
	{
		id: "104",
		kind: "theme",
		name: "Adult Cast",
		russian: "Взрослые персонажи",
	},
	{
		id: "39",
		kind: "theme",
		name: "Detective",
		russian: "Детектив",
	},
	{
		id: "11",
		kind: "theme",
		name: "Strategy Game",
		russian: "Стратегические игры",
	},
	{
		id: "108",
		kind: "theme",
		name: "Visual Arts",
		russian: "Изобразительное искусство",
	},
	{
		id: "138",
		kind: "theme",
		name: "Organized Crime",
		russian: "Организованная преступность",
	},
	{
		id: "131",
		kind: "theme",
		name: "Delinquents",
		russian: "Хулиганы",
	},
	{
		id: "125",
		kind: "theme",
		name: "Reverse Harem",
		russian: "Реверс-гарем",
	},
	{
		id: "130",
		kind: "theme",
		name: "Isekai",
		russian: "Исэкай",
	},
	{
		id: "33",
		kind: "genre",
		name: "Yaoi",
		russian: "Яой",
	},
	{
		id: "34",
		kind: "genre",
		name: "Yuri",
		russian: "Юри",
	},
];

// export const getGenres = (genres: string[]) => {
// 	let result = "";
// 	genres.forEach((genre) => {
// 		result += ` ${genre.russian}`;
// 	});
// 	return result;
// };
