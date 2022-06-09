'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "67839e1bba5029447aa47d2e4b280b37",
".git/config": "9b079cabae47c2e94112afe51a952e09",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a151a58b3aee90768243e4c55b276b0e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2d8673dba11fe2eb5afe5b701d062c39",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a070570129e8a39bdc6866c045359214",
".git/logs/refs/heads/main": "215c595e40804da1f3e85b701e13c9dd",
".git/logs/refs/remotes/origin/main": "34a99d136a9d280b7e362bab3f27d3ed",
".git/MERGE_HEAD": "745892ab2088276f0a9b193e393bdd0b",
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/MERGE_MSG": "f4b642a4abb80108c4bb8d7ac553d475",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/05/6e8f2de2c332b727de8c07725a81b9da6fcc82": "d7bef5f9a415f7c9693e97d8bef2e53e",
".git/objects/08/38e82ea8e1a26f70ab3867c8a0614268f3e53f": "572153f5294c501dc8380f1af663d9bf",
".git/objects/0a/c10b6ab086e3b79b1826137daf1bf42e078493": "591443185d712713d9bc3213c7a6f907",
".git/objects/0c/ba102952965d3712c6fb5f86266cacebd76921": "62bce4f5b685db71306843e28abd0f15",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/4161c6b5788eaf1fba1b910b70b8efde3bd1fc": "9ec6caeb0fc6bd62ce2efa0fef0bf5cf",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/0e/ef8a9c49ac1488ca88c4fef0bf736660b1e377": "8aa5a58130e3bffb474394dccb7805c1",
".git/objects/10/e5df76020ca30d64ee36be8ebf520b08becf7c": "14a93e9a10722179b8997b38af0a83fe",
".git/objects/12/efdb2a34b2515ecbf38d3ef17893b5e80472fd": "5e20f4849978b8ae48046cda8ae1bdc8",
".git/objects/14/3c0433baefe31c9f857c9d0fa6ab618afc2ace": "7277b89b9cbc2d441b6e707eaa6292da",
".git/objects/15/6f5ef48f11f170dd88bab25c787cba5cbb24af": "a796fc6294e6477a0740d82a720a4dc9",
".git/objects/15/b2a4d488bdc4ddf6a3a09edcc1cc3ed3687d1d": "ac24e9cd22bd6df242b35788e2992201",
".git/objects/16/7b1d27c8e87df127c11322ef4cca25cdbe4288": "51ade280aa5d2cb7ccd3f9cf92ffd01f",
".git/objects/17/9eae7a73630a7af76374c590555af8158e6145": "1988c2959091e1bf127d920f7db99fdc",
".git/objects/18/03932f95f91857f5c161d22459d2bd4a61d3f1": "73ff7fdbebb848c4391b0abf1da85bce",
".git/objects/18/699d293105b261010d6f921ebe929c6a2b255e": "353e13b8c18d103ba658a678576a4fec",
".git/objects/1c/88164b9deb9e412ce21835b7f2f88c7e8f51dc": "a49d1219b05140794d211c2e65419492",
".git/objects/1c/c7e0603034511a0808fade43c7536d7abc5bff": "765958743dcaa906c06a086635f4a3bf",
".git/objects/1d/175b6bc1c569998d55e11b4eb2dd14868f8a05": "588731665d63bb987d2056c05ddf1d03",
".git/objects/1e/4f854256e19ec3c5e488e9471d84c7296218f4": "8a1ef513ade5fcbed904d08bfec16525",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/21/602c0c130bec047f1996779fc3cc684a8b8af9": "b2270884ac22db7e37bab846bb2da92c",
".git/objects/21/7fccd99733a6cc956e547759dfb1afbc876b3c": "837ef6624c90842cc304b06c88c5b2cb",
".git/objects/21/87ba31887252943e1adaff8020948a4df0eceb": "f11e484e33452d11ebb7782145325c22",
".git/objects/22/50cf4d6298fbb005e40c0a9c24e01fcae9dc7e": "b62bb3633a2b22d06fcab4a8309e9bf5",
".git/objects/24/83dff463f4822d691d47e786af98f9dc9d4114": "2455910e775e481e98ad970ebae267d3",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/1c471196503a74974f033fb5d90ff8b972343e": "15a7e1952043ba77c77fefe8084cabd6",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/26/11d28820fb98a59d717243c9e6ba089e2877bb": "29d8c1e3f8bc11277187b161987fad9e",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/26/d4ece814e10a30557776c1cf2d2f0a4377837d": "fc8275307fd4df8c45fd56c12667436d",
".git/objects/29/82c06546dde34bf32513b512ca79d0628a9c1e": "6aae616abd7d90fdce39a0deb480256f",
".git/objects/2a/f14c4b9125c66cb24338d8825bb2fb57cf400f": "65587f676c1cd0d1e3a991f1e944c07a",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/30/36160bf2408aa052a08535ffb38cc38f21b0a6": "ed1610b13d00c28d2fcf2f0b2c12465d",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/36/8468ce4b77fd44a05f3d43ab873215cb6ed9b1": "7ffde59841988d05b268c89ad032e584",
".git/objects/38/b7f0c5343e30460dbc66b957d4062e2277d844": "1d669d2cecf434b4036b03d10c6c216e",
".git/objects/3a/30359dc759aac83f1750fd9804323930c47157": "7a18082afe2decf75321bdedd7c0af6a",
".git/objects/3d/290aa375a9d75b4e4e6f69fa2bb1a0dc8b9126": "50d1d8a95f032e2e1352e9ae14d8a0c6",
".git/objects/3e/2e8f14442d76c60061e357d6348ae71d2825bc": "52d418e8e155d2cadbd78440a2d02c40",
".git/objects/46/854ec8c87d07a84bfa2391820e40b1272c0720": "8954f818db374f031c3dd4c4107cf1a7",
".git/objects/48/bae00343346cc1a6ec6f40d0ae68c80ced28f0": "23b703df5faa0ab7152ae6f9e663ac21",
".git/objects/4c/628942c230f3e8c9f38cb3e28958b793813ddc": "8a5ceb3941327ba22b5427cfbf5626cd",
".git/objects/4d/3f2d7b1c8c8e56dc08d1187e3223ed29c34253": "5ede529953ef424f2a7dfc525ae0f027",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/51/f1f11c4a37cd7d6b0d55138809a0719a837f55": "6b7b65bd8764baadc056a6bb59321334",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/524c392df0c40b8e4731fe77c87604a0a25111": "4787554600b484b7889d7fb82ab7c909",
".git/objects/54/26a21c1d41c3f7b9b1e314cf422af5d48e18d6": "f5f6ce458b3fecf140baa0f122fbc35c",
".git/objects/54/b8f6044fb79d00586f4655eabd486c812c8dbf": "fb2f90c874658ea01045e251ceb4da90",
".git/objects/56/1cf98d2fa38bc9137c156949892774de85f25d": "5e339dcb5258cdb24777558f6169f18d",
".git/objects/57/995c430a3e9328fc7b710b52a5a4a963642a7a": "f646ab05df9910041512f509f1af89d4",
".git/objects/59/c0685476808799d10513c41af0675ad7cd4c67": "08cf0276520c98112a833bd0a522f0e6",
".git/objects/5b/4d4f4348b57fd9e9bb3ecfde30676c6f31cf18": "eba89feeb58a2726c4d236ad4d014c2e",
".git/objects/5b/85a25b49d005549c0af567f39874f3cd3e38d5": "33ea13d637fb623007a39c58c61c069c",
".git/objects/5c/7a88d28faff4d9b91c8b9ae378162655d6f84d": "f14444a8f427a247af20a9c82ec47876",
".git/objects/60/da183fb611dd47d0b494e369dbd7860b2bb0ed": "22730917e6d63335f134885bd93d3ac7",
".git/objects/61/7ff813c206b378104c0f3da8aaf68b0ed866ca": "3e45dab3b6d3bed4dfab56cecd965d2c",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/64/087cdb035910021fe8ae5ef1f807c70beb8bbf": "cd14c337dce9f138554708250393581b",
".git/objects/64/b2cab5aada8be6a52cd2a5534768d312df591e": "703dc4ef98e0fdab32010eab33d37664",
".git/objects/66/cc80c06d90c6a3ab6f6f536228f3f38f6fe9fa": "0451255c67cc7c4aceda9166bb9199e2",
".git/objects/6d/529bdadba10c39684ac19fa9e4c11e9b1af853": "faff0f45d23f51ce493c1c53fe5e9111",
".git/objects/75/087427b9baf35b78fcddf23f4ca4d2f088c397": "97f474c1521275c8229b50c9872cfe37",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/fa99d790305669b93f671cc03f361e6ac1b32d": "ff8858237755620ca5c6ae24d1d694f5",
".git/objects/78/41b98fb9d9b6c2edef36897cc754c3e0548dfc": "57e78af581f901ac93b3831e6ff78a25",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/38a501785b6955a0f2d61e5c0817c7ba21160d": "9a5aaf53724a09c4bf960bcf08b4ba3f",
".git/objects/86/b6085d8c6eec89b3b46258909f681427d6322a": "9271241c66ec8d4ac24a77b4187b05a4",
".git/objects/86/db53d0e02d64c97ab2dac1e10aea4219ca902c": "b93d9e56f8757267da0bcb14b502b202",
".git/objects/87/1a9dd22e65367718b2de4909bf8e4c462d69e3": "892a6711c604b80502f6045865093dbb",
".git/objects/88/0f083fe8376491b51320c24468deeea0bef634": "2a8eefc16256c782a33297061cd7d2fd",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8b/5ab8700b467040b99fa523044803f37aae8f26": "c37ce8bd7d2015ba8481f28e2527b2f3",
".git/objects/8f/5e1f62303b044e0c1fe799395e4111c5adf5c9": "3792ef732dc5079fdc54c13616836369",
".git/objects/93/6ece25be1ee835793c04542952f12d5c911217": "a6c2f0b523f14c42e97878131e1e0b2c",
".git/objects/93/e0ae6c7529a219cd836139ba1b413b627805b5": "09121811a19849415211d595f9a2bcd7",
".git/objects/94/ca2fb6098ecbed82824a8af04e0fe1873df40d": "d474903a016d39b659a822ffad7206b4",
".git/objects/9c/f23e0ddf58df2ec13da2b791ecc44828222ab5": "095c2509664263784ebb6a4bf2f94ae7",
".git/objects/a0/145bb7553dfe8fc23a2816498b5ffbd7b3f544": "5e4c9cea7262a11f94fd0549c6f9f131",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/ca560e2a930ff0bcbea74a7e4577e5842febe2": "c9b6f0fb43736b2daeb6004946110f00",
".git/objects/a8/bc43ce1375cc1fc525a2977f87fb6e1a2ab6bf": "de4447c81959ea210704344cc0aa23f4",
".git/objects/a9/a0a3cbf09866c5df41df238bb20ceb70c1a3cf": "30307f646616454f5c385e144653b18f",
".git/objects/ab/826cbcd99eb59d0ec87fbbc6a01d8d5f9a2461": "8a84cac60baadd7f5c22171e538e6eac",
".git/objects/ab/8cf485c8cd3e309571e4a84a02cbf8bc68d21f": "59a6839a33abfbf81dee9d96af9a82cf",
".git/objects/ad/56724f956a4e9c6c19657f5d9090f27277136e": "651041479b22adda12c827e9c44953ed",
".git/objects/ad/95df3928462a254a051aec9c835d90ccf67e0d": "705b2ca126c4254b298a5d0523c66a29",
".git/objects/b2/6482f2974f112ed2dc54486e888db6eab78134": "4de4536d804f69ff6b9588238bfaf7ee",
".git/objects/b3/2d9c42f5f904b8af1d24bc10ce761588dd763d": "d012432ffb347ad320d62039bf997879",
".git/objects/b3/5d7dbb733bf2583bdb26d43db39de31333daa9": "a9e2bcbf56b9ed5ae50453893e4ab904",
".git/objects/b5/cf4cf252ef9e912bcafcccde0df3f841e6e075": "15a388d9adf729bf15b30385220c8493",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/55f07b6619f2002d785a9227606649ff07dd4f": "10c2263560a4139b7a558d288f280c22",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/17a9ac626d5f93d8ac0977c517211ea9e806a3": "c05b84a1dfdeb643b5e918160cfb861a",
".git/objects/bf/6df52b129b571d93b5c8c52c86e0696011672d": "f9da0178986f223ca537bb8f8c071a20",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c5/292945734cdb70c18b6916f50bc2a8d2fb1008": "132c1c1ed58fe52873cdfbaba0964e45",
".git/objects/c6/17ac8164b1b92d7f95923b4c38883afb224338": "f0239b2401860b1c192028ac4e8a625e",
".git/objects/c6/8d746929deb81924c9f5e805bdbfc12bccbf46": "8935d08ad1ee134aa6beec6027513fa1",
".git/objects/c8/c90b7c2c97e1f78ab3c09687d0d7f9a2a60cae": "4d51cc92b66c7944539ec97202c36527",
".git/objects/c9/249c367148e24df6a66d3cf65401e85e0ebc09": "9bc95ab0d3bde46fadb129879d218828",
".git/objects/c9/9895d506c827f347c0f176f1bbd2317cdb320a": "032856754fad2ccbbbbb2d30f2135504",
".git/objects/cc/794072fe21d46585aa0d57c0b1e79fd0ce5193": "7ebe625534a1ee5978ec832f82143387",
".git/objects/ce/1fc375e11efd2c9cb7baf35ad94d479ea1f693": "f7e59031ef5f6fabe7d13b2506e7a285",
".git/objects/cf/0f050cac19070112309aa7ff5311d0872481c3": "4e35688a7d1fc0bf5eeb565390419894",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d0/2cceb9929ba26237164692173e3a9921ba8838": "f23f957e2fb1ab8c148c1eb3e00f0c67",
".git/objects/d6/6c8e7a1ba0e9195949e1c7992b57b12ea49980": "5e7987cff657eb4f13d17b00758c9b18",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d8/a22292ee404bd8b34123bb7748c14d3ad7bd9b": "1d0f4542928403425a700eb3f64b87b8",
".git/objects/db/f6aedf225e1e8d5abcca7cac2e95b8df9bca93": "b68d8d9800c9c4794995cf1a457ad221",
".git/objects/dd/170890b9611e872b3ecbc8168912de57979b34": "f59a7d93b29e5962dad1da3080f8379b",
".git/objects/de/2d3d7b657923b30f2c88009930456636be5586": "d6e95ef2805ce56b500447bad089aa9d",
".git/objects/de/66aa4c8025d6e8ae1b85045a4f351d1ef42182": "775c4887f172e9cfbf05fc45e46988d9",
".git/objects/df/a8b20edd01f28428f7d85dd90ca3837049fc10": "718909ca5a225483aa051d9220175021",
".git/objects/df/d2b5ecd8df817e42ceb210a9c9ea55a75816e3": "98705548d1ee4e2d64ff1f9473142218",
".git/objects/e2/181f77435225e0150814390e9bf5a373daaff5": "656636833159fcb1f13fe2121501b832",
".git/objects/e4/b81aa4da28b19fe8e3967a562f2d702bd83e8b": "8b51c9a97e60d3f0fbf689434f302b6c",
".git/objects/e4/fe5d0b0fdbaf0ba9d2f3bf1cc0ebeefef2dd59": "8125381578663e10ee7e2d98f18b2697",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/845a28576c6c77c31de65db4abbe463d6fcee9": "5561817988059a4b544e13a5638ca844",
".git/objects/e9/5b7b2a0f97e23040d65e2931061ff77a39aa73": "d67effa3f055a05668d0a66be8efa972",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/03500e25a7c2f4681b4b2a450354be6e133281": "9bcac26435dda3e60cace985116cf41a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/9dc8a92362255cda920243b44aa5a421c7a93b": "8785a26170967ba882ebe5f77d16e82b",
".git/objects/f1/664ed1906f66c2f0e3bee4fa4f6a085aa54dfa": "e61f5f4ff98d277de2c5dff97e76b724",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f8/66725167059651ec82894707f2308e5e164ea4": "b06bd21e882908745b37912521942523",
".git/objects/f8/93b54c659ba9da2c19b4c4ed1f7172231313da": "ca7f846195cd8ca3732bfea66b17dafc",
".git/objects/fa/5ba961273217088fd693636db51394ddc69ab1": "8ef05662bc9e6fb41bd084d50f8fc11d",
".git/objects/fa/77e8a8fd588593f9c9889ec728b2cf389690ee": "7e5f198d580104e46c1cb30b1bcf0824",
".git/objects/fc/c7933c7a0be1a32057af45e53dbb1912dce842": "cd0b20114e3e54d0547c32e1e23cfbf0",
".git/ORIG_HEAD": "cfb018545fa378c5763e4d46273df75a",
".git/refs/heads/main": "cfb018545fa378c5763e4d46273df75a",
".git/refs/remotes/origin/main": "745892ab2088276f0a9b193e393bdd0b",
".idea/workspace.xml": "419ba5a454ba87b8ffe6ce841508b3a5",
"assets/AssetManifest.json": "5f2f4e6733382a881e0a48b3b1442e84",
"assets/assets/fonts/nunito/Nunito-Black.ttf": "529509f5501c7f45315210d280a456d4",
"assets/assets/fonts/nunito/Nunito-BlackItalic.ttf": "8bf9ce6e0c5434ca0ac97f90196d0c66",
"assets/assets/fonts/nunito/Nunito-Bold.ttf": "c0844c990ecaaeb9f124758d38df4f3f",
"assets/assets/fonts/nunito/Nunito-BoldItalic.ttf": "b21199decd37bf9a096e0f495bb20ffd",
"assets/assets/fonts/nunito/Nunito-ExtraBold.ttf": "438598eadc302471a495b3133620f621",
"assets/assets/fonts/nunito/Nunito-ExtraBoldItalic.ttf": "5f67429d0ff76ec74d98b915439692ee",
"assets/assets/fonts/nunito/Nunito-ExtraLight.ttf": "4470502486a612e2bf6f38d5bff77ce8",
"assets/assets/fonts/nunito/Nunito-ExtraLightItalic.ttf": "ade1717e588935bdec3d38ca19bd1050",
"assets/assets/fonts/nunito/Nunito-Italic.ttf": "380d3172fab0055a8d74ab12636f5a9b",
"assets/assets/fonts/nunito/Nunito-Light.ttf": "08bc5f85e4505782d3fa279944f2feab",
"assets/assets/fonts/nunito/Nunito-LightItalic.ttf": "55032f4e811253da318f967e0db3d7e9",
"assets/assets/fonts/nunito/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/assets/fonts/nunito/Nunito-SemiBold.ttf": "876701bc4fbf6166f07f152691b15159",
"assets/assets/fonts/nunito/Nunito-SemiBoldItalic.ttf": "59cf0995782240777656a355cf08b234",
"assets/assets/images/login_bg.png": "2405cc6795b62ecd8a8bd8052ee42da0",
"assets/assets/images/logo.png": "f9f47e0daff5b1c54cb70c37299e1850",
"assets/assets/images/loho.png": "f9f47e0daff5b1c54cb70c37299e1850",
"assets/assets/images/mourafik-icon.png": "bc5caa3a2e616dac3e2a83e948186308",
"assets/assets/images/mourafika-icon.png": "d6b517382cccf8f802dad82953e89eee",
"assets/assets/images/raster/man.png": "038044b52a3b38078fbec1d61af42639",
"assets/assets/images/raster/tel.png": "038044b52a3b38078fbec1d61af42639",
"assets/assets/images/thumbnail_admin-icon.png": "b77712ca66a816d74764ba4e3a761f17",
"assets/assets/images/thumbnail_hajj-icon.png": "24d53e5b81849a56083e536af6fa66df",
"assets/assets/images/thumbnail_hajja-icon.png": "1b3767af6498de35380f889c37593501",
"assets/assets/images/thumbnail_seik-icon.png": "f0fdbab8b58e873379d34f4bd847c515",
"assets/FontManifest.json": "b2dc9aadb7c86fd3e113b1189d4b5821",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "84f04923072f7d948f15d0fb71094032",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "a71dbd49ad4a52020638190e30ac52e0",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/sp.gif": "baeaf0c7f02777839e58eed62cc714c4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6017607d150910c8a9ada2d2f9d3c6df",
"/": "6017607d150910c8a9ada2d2f9d3c6df",
"main.dart.js": "48e0cc992b99467757f79c4fd7251d94",
"manifest.json": "c674475108857f7f6f790d68a1c6886a",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/splash.json": "bcb7399c07ec8085f712ab667f96ecf9",
"splash/style.css": "192270c56052dfd03bc8466710de8e0c",
"version.json": "12f2acf6b803349b1afd40547cdde1d8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
