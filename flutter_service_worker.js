'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "77d1f0b46b196c5a930777365a2e4cb7",
".git/config": "dc4ca63dc0f8a630b989d718ad95f772",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b6880e8cb56b3e088c340a5949538ad6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "03d3e9c54ef5b785e8747ec09ef88b6b",
".git/logs/refs/heads/master": "03d3e9c54ef5b785e8747ec09ef88b6b",
".git/logs/refs/remotes/origin/master": "188eb04793b13ddc325639c3e0e70f63",
".git/objects/00/46e1f066e191cee646c04009ed8c6c3e98b304": "388e18401584ef421161eaa9979ad97f",
".git/objects/01/e204a8084b8668a2b7008541ed04ede7a64a56": "92dcebd8b306849641ccf9e64db5ce5e",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/b35a4e0bb5373f00f9458bd22293cfa01c8ba9": "6f14f0e38e4967f9d72395c3b0ef25bc",
".git/objects/02/ff6fff07885b50373c35a6f59819b68e3ca8f3": "5da2ce61fd26311760edfa680b6dd662",
".git/objects/08/1274a6687695fe0ef7a02011bd4846d7f61b33": "d484855452adb464ee6835f6c45b31da",
".git/objects/11/17c207d116df6de004381cd47975baadcdd05d": "a33d3d8ce02b53322b3ce12767339031",
".git/objects/15/9bff7c5e452d772c8cb57ec9f9d181dc0332b5": "bf0b9e5ae75777a95fb75e79fb9d3b11",
".git/objects/17/8a9923775cf9c47d1a31733e1d5cdf9651ae83": "e7b250a752eac395ce13767c55e9125e",
".git/objects/1a/11bb4f843348ff8d304f629f3f33bc1775e5f9": "7aa003e265bb5e2b37592b4004169f76",
".git/objects/1c/c37b73d09d4b19d0e2f6b2b2f445f6e515134d": "652e5ce4e72761dd83047e844425b2b2",
".git/objects/1e/674770b93aae088b3f9e2ea2e911c99689b2de": "aa22c669310aa22c40c9ef615a871779",
".git/objects/1f/122d94b67488c9c4113e6027651976d15567ba": "aeebadf185e1bd5267daba95351ff8f9",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/c72678182b341e3328db4d6851d4d901ef3320": "cf6b8d1e8f1752978d7847d8597b81b6",
".git/objects/22/ec7976bade1087299d0ff597c4704fd08bc279": "ab3a4fb18ab116dadf72915b4da734a3",
".git/objects/23/56bdce3d5b25fcd667b53b70967b53032cbe34": "8c50c02ed092b03a696d5ca1ace26f64",
".git/objects/23/dd23f8830e8c618b90166d8ecdcb2fd57e2dea": "10ac0e4a740e40a5d75822440b9fbc20",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/48b0e619b71bd35d29b46c3f98a7956ef62035": "05b619f71e71acb7ed75a3d0330b8692",
".git/objects/2a/85a52c8072b74749cebdc5853b940c8aa683d1": "7dfb312b9825b629034c86ed190cd467",
".git/objects/2d/319308fc8c59645cb9fcc7e03a51f4445e7b35": "82e909625593874d87b37565d211418c",
".git/objects/2f/ed12fcdf0695d6201e96b989cd650032b517b7": "57a580458efa3fc20aa8282a797388b5",
".git/objects/31/2ef10b2934f7c38ee45dcf2dfb7271f71652ef": "a90962aedcd6bdd5943bc9013e3c1d17",
".git/objects/31/ebc5e24ce970070a02bb7067a08060056eb47f": "3c7c3aa4d3ab51475f9cd03c9d070618",
".git/objects/32/37be7fe59287a45f63c7765c091d92cc927e20": "a97f41315465f03c46f8502a24cfe004",
".git/objects/34/ef2dbe5857299ca705dad40565e66e8c8b6632": "e7535de08c44392ba259afe14c7515a5",
".git/objects/39/2dd6a5536d5e1ed69cc95e6f1f2bc9c4696896": "0e33700ed66b8ec23125cd5ca550deb0",
".git/objects/39/c4e3562e157b582095ca7308a513c058db6d40": "52f5de9408f53e5c9c7bbb07bedc2380",
".git/objects/3d/35d0a3f2e5db6d9d4119fb599086f0e7f7a1a2": "95a1c9117df5beb5f60a3e7be7ce37df",
".git/objects/3e/517a0e776c3cb026ce62b90c12f799490c2b96": "4c995a85b07b1dbb3f0131eda7f96863",
".git/objects/3e/6cac68a8af5d03973f7d81d12ba1d8c20b94dd": "6cf7a6c7ba070bac47ed9165026d2e9e",
".git/objects/40/a2b6863ed4b21bdabfb5d70479e9cfdeb45792": "b273cd3e1220dc1dab45e1a3d45938f1",
".git/objects/40/c6e1efc8e3ad4af331f4032a0b5d32537030f8": "ddedf51f207747ad9253c4a3be05076b",
".git/objects/41/c92549333f9f820c41c1883ea7f6e4e1042c93": "eaab7fa96eb30310446d171e5ef191b3",
".git/objects/41/d16becd6e2ba757969a68c22a899002996e7b0": "4191e1c4065d0b79b063d9985159cfb4",
".git/objects/48/ba65ed33dff18e74c62b0f08d8165db64a3085": "9aa3a7fdcbc6e5a4b96701d6dc3f541c",
".git/objects/49/1c6ec57985724e65942c2c00093a56e1df2bd8": "2f0b2e8ccf479a6bf9b22a8c9bb16240",
".git/objects/49/310a48d16b270df85b488b801f2e58d56cd712": "44b92c4ae361fac7e43ba7fb6c9703b0",
".git/objects/4c/bd8e2ec882f58ead629ded96784b2be6ae20d6": "cb56f50ba218ad9f24fb309baeebff07",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/0f9c5b811358b58fd03df9db748c87b601dd2e": "002b7717daab527b6a3e691d25595ec0",
".git/objects/4e/d2833e57bcffbd88f686bf3a69a85e0b47669c": "33fec949e2cf0cc5b03ad13804e1910e",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/52/9f57fc6cd852774650b625ebac324f53b14ee4": "f9917fc98387b4f67651750ed11144b6",
".git/objects/58/89f9303a4e317f888ab9e4a300d5e374277bb0": "1b914bb6f09fb427abb831d92aa870be",
".git/objects/59/225514d8a1a1eaaa2f361888d748795aeb67c7": "cab8c613489c489189e85fb8506ac9e6",
".git/objects/5d/95e08fcb49f9943dcd1157107663cdcf95e26f": "fd64196a20a7256fa055757b6b5e9446",
".git/objects/5d/c7160a5777dc4a1fa69f674884fb0a4988ebe9": "0a405d838be31aa4a4fa59d76654efa3",
".git/objects/64/5c62a22e8729ab2d8bfef2cab984b97c014290": "be49f814baa94f1d35dfa8245b68946c",
".git/objects/65/7a18da9607867f3e67cef07f769559dca55919": "05c5ef333478257ca7eb206c40c6e24a",
".git/objects/66/5512335f278bf164470b9f9c4d886e5ca29586": "387e4cb1f6a0ab54fc772d51495b98b2",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/dc083afa8c502f4476b2bfb8a456df2068b4c1": "585100423249b3f7798ee9e83559c201",
".git/objects/6c/e0cd876858b82ef487ddd0cf838229efb97f6e": "a76255373c5950d773a756b3d5cf69c2",
".git/objects/6e/2a48e30cda280226dd3e59c2df844806f21c9a": "17bc0a85a603bf4ff0bf11d2ca059b29",
".git/objects/6f/0af64d0913983d13c9fca982a40aa64c5ac28f": "a6ce472fd3ecca6e118a40def40ccffc",
".git/objects/6f/873dac563cf96479904fa6f57e077adaec67ce": "89b5c091cf9f2bb04e8b27f10327e0dc",
".git/objects/74/1550953db72840995854f5f2a7a08659c8aa0c": "e14c4bb8350d0dc38d5cbcd88bde1cf1",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7e/e4993f21ef25fe0889984492ee4fddf8218dc4": "5769b63be53d8bee778b6fabe50d449e",
".git/objects/80/72e9551abf20c2a193f543bf1cdc064c7e0855": "334719af574232df10b010b5490cacac",
".git/objects/83/3f903fe4ae47644e8a12b7ae362f3727a8a306": "52be4f202759418b1e4d0c2442db30fd",
".git/objects/83/5d380d4a2bd7118d5983ed3067645dd14c77c6": "de76d59c9a1b7595ed39cef0f51ef651",
".git/objects/84/bc0f469741f9602b8fdc1ce6ac6cc11c2a0e1b": "5e5a4cddd7cbd043b724cafc7dc12174",
".git/objects/84/c303e429622fed15da3ac3cd1524da29f59935": "4089103172a56b42346fbb325448c85c",
".git/objects/86/04419ab0a11062b38be00dccdb610121a30276": "6445f34b3a6e573ebb87e0dfa5278d8b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/24367eaae0c5b7884d89a5950ffb7391c90cd7": "bdd317f537c6be47524ebf1ed5fdef9d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ae06c77e8acc2ada09a66cbdc4b601820408bb": "b56e979b3190c844d2a49f93e1f9eb75",
".git/objects/8b/72a1027330935b09609df5aa325173e37ee57d": "bd81ccbf4cfc1e0f7d5b06a19c2ad4d1",
".git/objects/8d/bcdb39209f4450788e0efbb341e64060803e5f": "db144e354090383147b803bc1ebdbfe1",
".git/objects/8f/5e20485821334cba1fc158bb707437a5ef337b": "1ddece99a10977da2ce162f37dcfb929",
".git/objects/8f/c99b33bb817639f48ba243ca0be34e2266fb8f": "b7bb5cafa71f15ad3ff63d0076fd60e2",
".git/objects/92/c2abdcacb753c09b2bcb801d5573f222206e1e": "067948eb1717d1a7858f627fe557163a",
".git/objects/93/6cddce808491a95527ea7610f5753d7d41092d": "c36b934683496ee928cab9df4d88b90a",
".git/objects/96/c5dc8c016eb3fa197b8b29f143207be89f40c2": "6bb4e3d8c29dc1a132b2dc6c84e41fdb",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/99/8ed88c197a08af30cdad284a8da99489f13624": "a75d64eef57b3237ade9c04ae86b4b33",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/20f43cf54ee0fcd6b96427a8c1b7de36a9a924": "474f05db16a6cbd5bf5fce2a642865ad",
".git/objects/9d/8949203c188a76f8785a3b00581538ce8dd897": "a2b0dc5af514cd9ee7f26e32d06ee17c",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a0/0dc2753deb8fbf93b1b03ab689f552ab83076e": "089ad2f697023578836de35528c4f6d9",
".git/objects/a0/1082c68677210aa36551ca6b124ac34ece4ff0": "6b546b972aefff41d35c406a1c219184",
".git/objects/a3/d965c2ff726a27da40f0a96a8da226295d4c25": "ab72b32564159a626e852bab19f027cc",
".git/objects/a8/d9948f2bd46048e4b570c7377948e1fcc3e761": "42bac4268437ce461650ba0e9faa6a6e",
".git/objects/aa/53a6238137e631ced9a3a6d53084256963913c": "9e2d01ce47fd40f041034f5d4ae80b31",
".git/objects/ad/77800e35aa7378f7dafb95cd0bc275dba04dc3": "607234a57d1fa8b0a6bf48608a044120",
".git/objects/ae/f3e87349c3009f184e27f62f6993c0e61f582e": "bdbfbe3a23c70b6ddfeaf0a0449d06de",
".git/objects/b6/b6c32886abe412d89358eea23ddf959c31a689": "f39436f20d05a639be2ad92f51f15173",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/59a84cf4c995fc0903b200d66f7e3fc6cc02d5": "f786ce628d2accd543b465fc246472d4",
".git/objects/b8/c2f7e784641c280bda971663dba7c3cd0e6274": "c35c4995ffe12f813ae515e9dcdcb7b9",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/854d4b01a572767f85efe100a5137ba5323221": "ca87ad447b9a3244b3f9f5d3f1eb6cd0",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/930c8fbefeb70ece095bba618d0be6a397c6ce": "10f6a417f3bf2d56ab7b565ae012583f",
".git/objects/c8/da200e13ee0f2d862c844bb0bc746c244894a6": "7e2e1b0bc7630d47fd2bc51b87a60353",
".git/objects/c9/4a6581d5eba268f6c03725f715c9d831087714": "4198399a40fe54fa6a2c218409838295",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/0449ea1530720d378fe88c135862f3e8606d78": "c814a8058d66adffe6d2c98344e80962",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/bde3878461a8de41ba190074f6df146962217f": "a00f8f62e0ce257b7a57e36cd52191f6",
".git/objects/de/b9b87bf9a5040761c02fe8a6ce7ff689bbae69": "1aeb5fec3216294f14043216b09ca42d",
".git/objects/df/bcfe4f25b6754e907e8e51c87c386baa377d1d": "64c9fdbbfce14cea20331b6a91b0e50c",
".git/objects/e1/bb5436b1434ec8a0044425065f032dc5a5ee76": "b61426f15aaf1354303e5c13859ce07c",
".git/objects/e3/d7a74befa336415e7f3ca5334141b68f143199": "9ee9bf3521eb91dbad10562a25e915a7",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e6/6241b9b37ced6575163afcdff17352154fca5a": "bce6445e8dafb8a17d9b5ce69b3e94f8",
".git/objects/e7/5fe426e351878a11f2d76e528aef9529e134db": "e04ac4ff8aa41964a395913182b72fb9",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fb/cc1b6436c99452b45df4f6b6003f6c6d1423ad": "b5b747d9f4009d7e649b28d7a05ad0f6",
".git/objects/fc/724bc1028fd75df158c72fdd2854828c334a16": "0a65f68a4816c64fa7cb2859e1e13cfe",
".git/objects/fc/78f6c71d88efa0138568fa502c67282e20ebca": "f4999f9b54c15ab8b40b3bcea00eae58",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/master": "e0ee7bb5f3cf53a362cf479692e48ffd",
".git/refs/remotes/origin/master": "e0ee7bb5f3cf53a362cf479692e48ffd",
"assets/AssetManifest.bin": "ebe5541e15b1fe46169c14551fdcbb42",
"assets/AssetManifest.bin.json": "d164512ea67e77b89f019318f2ff0c22",
"assets/AssetManifest.json": "96bb267a3866e6ff089376c3c526e72d",
"assets/assets/fonts/Montserrat/Montserrat-Black.ttf": "b9ca03e9742434a8a843b6402995f1c8",
"assets/assets/fonts/Montserrat/Montserrat-BlackItalic.ttf": "da2cf9d185834f683099611f0a8dd54b",
"assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "354dc625a35bef1b6ec00a79c6cfc0c8",
"assets/assets/fonts/Montserrat/Montserrat-BoldItalic.ttf": "8d0891d878255f74eafd82d059cdb9d1",
"assets/assets/fonts/Montserrat/Montserrat-ExtraBold.ttf": "1497e6fee4dd060b35f6b49e4241cb3f",
"assets/assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf": "f201991f01e3d93a72a397ad8634f279",
"assets/assets/fonts/Montserrat/Montserrat-ExtraLight.ttf": "432be4a65a340e38f31651576ec58487",
"assets/assets/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf": "5f562375fc1e3717fb1f8f788e86291a",
"assets/assets/fonts/Montserrat/Montserrat-Italic.ttf": "5128267cb132ae4a1a9e1d8ed61c1834",
"assets/assets/fonts/Montserrat/Montserrat-Light.ttf": "e1d9d4d7fc9ff0f24b901292a900ef66",
"assets/assets/fonts/Montserrat/Montserrat-LightItalic.ttf": "ce37c59e8bd8f6eecd40cf72e3198b56",
"assets/assets/fonts/Montserrat/Montserrat-Medium.ttf": "ee130b491bf120cdb261d27ec29e2805",
"assets/assets/fonts/Montserrat/Montserrat-MediumItalic.ttf": "aaba9a9046de09a1ace6971fd7dd3b8a",
"assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "38712903602f88435ddddec98862f8b8",
"assets/assets/fonts/Montserrat/Montserrat-SemiBold.ttf": "6e7bd3eacb1d1088e5063e375fc467aa",
"assets/assets/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf": "9d08190268d026bbe4046c3cf911f87b",
"assets/assets/fonts/Montserrat/Montserrat-Thin.ttf": "a6cfec0cb3e946398cffcd4fa7ac61d1",
"assets/assets/fonts/Montserrat/Montserrat-ThinItalic.ttf": "da63f6debbd658592bcc843867837581",
"assets/assets/icons/svg/github.svg": "c31dcc2633c4b99013595d5ddce9697e",
"assets/assets/icons/svg/linkedin.svg": "6357197ac66d3b559e65997f84bd4e30",
"assets/assets/icons/university.png": "6231aa431c2ec66a583fef2232117e77",
"assets/assets/icons/whatsapp.png": "6d631d41fe5f850f2e47427a30af3e4f",
"assets/assets/images/graduation.jpg": "29a3cfd0cfb79274f03e84bea0b5df53",
"assets/assets/images/image-3.jpg": "3c45c483e7b21efa905060ffdf4971e2",
"assets/assets/images/my_image_2.png": "18e4524b0b67bad2942ebc4fc760378b",
"assets/assets/logos/my_logo.png": "99ddc4bf9119d6539f1a8ec072e9dffa",
"assets/assets/projects/how_to_do/1.jpg": "1aac49467920717cbedb13123c83bafc",
"assets/assets/projects/how_to_do/2.jpg": "e378142ca8aa0f74434d84f19adf3218",
"assets/assets/projects/how_to_do/3.jpg": "a32cfc1677904f50303021f0c5849432",
"assets/assets/projects/how_to_do/4.jpg": "86386ef3afe6ad11cd46742193d5af32",
"assets/assets/projects/how_to_do/5.jpg": "4c006981d0d9570e3669cefe714e4f83",
"assets/assets/projects/how_to_do/6.jpg": "50e2f0df1bded32776d41ac839c8d61c",
"assets/assets/projects/pregnant_mom/1.jpg": "621ee3ed6d5653a3311e9c6134f91fc2",
"assets/assets/projects/pregnant_mom/10.jpg": "b4655f86327d4e9b7ca41230332ea6a6",
"assets/assets/projects/pregnant_mom/11.jpg": "c5860bcb90b5e95f03e083e9bccf4915",
"assets/assets/projects/pregnant_mom/2.jpg": "bae916e1e091e21586dccb991037b02e",
"assets/assets/projects/pregnant_mom/3.jpg": "8c3c77fce6e34e280a0b7aaa3330e722",
"assets/assets/projects/pregnant_mom/4.jpg": "67fdf018ffec3329a3745b659ae71ea4",
"assets/assets/projects/pregnant_mom/5.jpg": "f36f373b025d41f56232eb2a82ef4121",
"assets/assets/projects/pregnant_mom/6.jpg": "7545c9b756de560968f0d0c9d1ee6b84",
"assets/assets/projects/pregnant_mom/7.jpg": "6595625f451f84ffbadfa7132f1c22e0",
"assets/assets/projects/pregnant_mom/8.jpg": "666f74db5ee9d282d2ed03bb89a60dcb",
"assets/assets/projects/pregnant_mom/9.jpg": "62dc6781b5dfed7f810bc8d0a3389405",
"assets/assets/projects/pregnant_mom/banner.jpg": "5d21f837452c437e14aa4f59a97774ce",
"assets/assets/projects/ushop/1.jpg": "df3ddbad368c3f02ecb2462fdb02168c",
"assets/assets/projects/ushop/2.jpg": "2fb16dc6f9c3aff80e187081b3e48060",
"assets/assets/projects/ushop/3.jpg": "81bede7427a0e7a4428e09db0dd9be80",
"assets/assets/projects/ushop/4.jpg": "c538024571f3262f3bfa982dc21af8d7",
"assets/assets/projects/ushop/5.jpg": "b353c965adeef8217f30e906e4006c03",
"assets/assets/projects/ushop_dashboard/1.jpg": "090bbafc7a28f4f6ec0d28f616fb2999",
"assets/assets/projects/ushop_dashboard/10.jpg": "c6d167d27ace6543837c1a2943330659",
"assets/assets/projects/ushop_dashboard/11.jpg": "d1230bc1be4e04528d551902d52cbd17",
"assets/assets/projects/ushop_dashboard/12.jpg": "e59a8c21cd77fe7fd3b36e1503f90165",
"assets/assets/projects/ushop_dashboard/13.jpg": "f2487ef6f1384ccee1fcdbd1b34f4959",
"assets/assets/projects/ushop_dashboard/14.jpg": "c48386828b51d8d0d6fe0a79ac6c5cf2",
"assets/assets/projects/ushop_dashboard/15.jpg": "aaaa50d0e2b6a92a441ccb971977872c",
"assets/assets/projects/ushop_dashboard/2.jpg": "f54b97555b7af4b72f01ac8c9b734005",
"assets/assets/projects/ushop_dashboard/3.jpg": "d12c0a93557f5e8c314665b51e170315",
"assets/assets/projects/ushop_dashboard/4.jpg": "53ee6c96e103fb115b4aefca04db9427",
"assets/assets/projects/ushop_dashboard/5.jpg": "cbe7f8493373f7d1af9cef4f54d358a5",
"assets/assets/projects/ushop_dashboard/6.jpg": "bbde71a0f2287f2e5e141914f7bee4f2",
"assets/assets/projects/ushop_dashboard/7.jpg": "449d6958d6d6a99358ce686882edcb07",
"assets/assets/projects/ushop_dashboard/8.jpg": "3c5b01fa02378dc0c91e4309ccc128ab",
"assets/assets/projects/ushop_dashboard/9.jpg": "78015be741ee5a7d3715a7e1330b424e",
"assets/assets/projects/ushop_dashboard/banner.jpg": "44fac79dc335f749b8d7ae0302cab4f3",
"assets/FontManifest.json": "9aa204d26634a0e795b2cb8e993d97eb",
"assets/fonts/MaterialIcons-Regular.otf": "3181bc8f520c169282283130b924fc61",
"assets/NOTICES": "65adfa66aae132ecb3c07f2b435dde52",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "71d5ee4283e681981b146ed30bce15f3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "bc9037ae757812300df8a0bb87b636b4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "52785069ba320906c703311eb4aadd7c",
"/": "52785069ba320906c703311eb4aadd7c",
"main.dart.js": "5b206482dcb9b872f1adf36b897f374d",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"small_logo.png": "4557c1a2e3194def68def9983d1841e9",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
