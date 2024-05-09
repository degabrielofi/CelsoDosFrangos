import styled from "styled-components";

export const WavesAnimation = styled.div`
  margin-top: 1rem;

  .path-0 {
    animation: pathAnim-0 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes pathAnim-0 {
    0% {
      d: path(
        "M 0,600 L 0,112 C 34.93687644194128,101.78377377197464 69.87375288388256,91.56754754394927 105,75 C 140.12624711611744,58.432452456050726 175.441864906411,35.51358359617754 212,59 C 248.558135093589,82.48641640382246 286.3587874904734,152.37811807134057 315,149 C 343.6412125095266,145.62188192865943 363.1229851316956,68.97394411846022 396,61 C 428.8770148683044,53.026055881539776 475.1492719827444,113.72610545481848 514,144 C 552.8507280172556,174.27389454518152 584.2799269373265,174.12163406226585 617,160 C 649.7200730626735,145.87836593773415 683.7310202679492,117.78735829611817 716,104 C 748.2689797320508,90.21264170388183 778.7959919908768,90.72893275326147 813,82 C 847.2040080091232,73.27106724673853 885.0850117685437,55.29691069083593 918,73 C 950.9149882314563,90.70308930916407 978.8639609349482,144.0834244833948 1014,145 C 1049.1360390650518,145.9165755166052 1091.4591444916634,94.3693913755849 1129,82 C 1166.5408555083366,69.6306086244151 1199.2994610983983,96.43901001426562 1232,115 C 1264.7005389016017,133.56098998573438 1297.3430111147434,143.8745685673527 1332,142 C 1366.6569888852566,140.1254314326473 1403.3284944426282,126.06271571632365 1440,112 L 1440,600 L 0,600 Z"
      );
    }
    25% {
      d: path(
        "M 0,600 L 0,112 C 45.60049210813297,137.90238601722854 91.20098421626594,163.8047720344571 122,155 C 152.79901578373406,146.1952279655429 168.79655524306918,102.68329787940013 193,93 C 217.20344475693082,83.31670212059987 249.61279481145738,107.46203644794241 289,119 C 328.3872051885426,130.5379635520576 374.7522655111014,129.4685563288303 409,131 C 443.2477344888986,132.5314436711697 465.37814314413686,136.6637382367365 495,122 C 524.6218568558631,107.3362617632635 561.7351619123513,73.87649072422366 599,87 C 636.2648380876487,100.12350927577634 673.6812092064582,159.83029886636893 711,159 C 748.3187907935418,158.16970113363107 785.5400012618156,96.80231381030062 821,92 C 856.4599987381844,87.19768618969938 890.1587857462788,138.96044589242868 925,140 C 959.8412142537212,141.03955410757132 995.824855753069,91.35590261998456 1026,95 C 1056.175144246931,98.64409738001544 1080.5417912414455,155.615943627633 1119,157 C 1157.4582087585545,158.384056372367 1210.0079792811491,104.1803228694834 1244,76 C 1277.9920207188509,47.81967713051659 1293.4262916339576,45.66276489443332 1323,56 C 1352.5737083660424,66.33723510556668 1396.2868541830212,89.16861755278333 1440,112 L 1440,600 L 0,600 Z"
      );
    }
    50% {
      d: path(
        "M 0,600 L 0,112 C 31.295051556618674,134.86569804368145 62.59010311323735,157.73139608736287 97,145 C 131.40989688676265,132.26860391263713 168.9346391036693,83.94011369422991 202,79 C 235.0653608963307,74.05988630577009 263.6713404720854,112.50814913571753 293,128 C 322.3286595279146,143.49185086428247 352.37999900798934,136.02728976289995 395,127 C 437.62000099201066,117.97271023710006 492.80866349595715,107.38269181268276 532,109 C 571.1913365040429,110.61730818731724 594.3853470081817,124.44194298636899 629,128 C 663.6146529918183,131.55805701363101 709.6499484713157,124.84953624184129 737,125 C 764.3500515286843,125.15046375815871 773.0148591065554,132.15991204626584 806,124 C 838.9851408934446,115.84008795373417 896.2906151024625,92.51081557309531 936,106 C 975.7093848975375,119.48918442690469 997.8226804835945,169.79682566135295 1029,162 C 1060.1773195164055,154.20317433864705 1100.4186629631604,88.30188178149302 1133,86 C 1165.5813370368396,83.69811821850698 1190.5026676637644,144.99564721267498 1225,150 C 1259.4973323362356,155.00435278732502 1303.5706663817816,103.71552936780715 1341,88 C 1378.4293336182184,72.28447063219285 1409.214666809109,92.14223531609642 1440,112 L 1440,600 L 0,600 Z"
      );
    }
    75% {
      d: path(
        "M 0,600 L 0,112 C 44.628458359604124,122.749413003597 89.25691671920825,133.498826007194 116,118 C 142.74308328079175,102.50117399280602 151.60079148277114,60.754108974821065 186,67 C 220.39920851722886,73.24589102517893 280.3399173497074,127.4847380935218 323,133 C 365.6600826502926,138.5152619064782 391.03953911839955,95.30693865109174 414,91 C 436.96046088160045,86.69306134890826 457.50192617669427,121.28750730211127 497,137 C 536.4980738233057,152.71249269788873 594.9527561748233,149.54303214046325 636,135 C 677.0472438251767,120.45696785953676 700.6870491240123,94.54036413603573 730,107 C 759.3129508759877,119.45963586396427 794.2990473291271,170.29551131539384 831,162 C 867.7009526708729,153.70448868460616 906.116761559479,86.27759060238893 941,69 C 975.883238440521,51.72240939761108 1007.2339064329574,84.59412627505048 1040,109 C 1072.7660935670426,133.40587372494952 1106.9476127086916,149.34590429740916 1139,157 C 1171.0523872913084,164.65409570259084 1200.9756427322752,164.0222565353129 1236,160 C 1271.0243572677248,155.9777434646871 1311.149816362207,148.5650695613392 1346,140 C 1380.850183637793,131.4349304386608 1410.4250918188964,121.7174652193304 1440,112 L 1440,600 L 0,600 Z"
      );
    }
    100% {
      d: path(
        "M 0,600 L 0,112 C 34.93687644194128,101.78377377197464 69.87375288388256,91.56754754394927 105,75 C 140.12624711611744,58.432452456050726 175.441864906411,35.51358359617754 212,59 C 248.558135093589,82.48641640382246 286.3587874904734,152.37811807134057 315,149 C 343.6412125095266,145.62188192865943 363.1229851316956,68.97394411846022 396,61 C 428.8770148683044,53.026055881539776 475.1492719827444,113.72610545481848 514,144 C 552.8507280172556,174.27389454518152 584.2799269373265,174.12163406226585 617,160 C 649.7200730626735,145.87836593773415 683.7310202679492,117.78735829611817 716,104 C 748.2689797320508,90.21264170388183 778.7959919908768,90.72893275326147 813,82 C 847.2040080091232,73.27106724673853 885.0850117685437,55.29691069083593 918,73 C 950.9149882314563,90.70308930916407 978.8639609349482,144.0834244833948 1014,145 C 1049.1360390650518,145.9165755166052 1091.4591444916634,94.3693913755849 1129,82 C 1166.5408555083366,69.6306086244151 1199.2994610983983,96.43901001426562 1232,115 C 1264.7005389016017,133.56098998573438 1297.3430111147434,143.8745685673527 1332,142 C 1366.6569888852566,140.1254314326473 1403.3284944426282,126.06271571632365 1440,112 L 1440,600 L 0,600 Z"
      );
    }
  }

  .path-1 {
    animation: pathAnim-1 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes pathAnim-1 {
    0% {
      d: path(
        "M 0,600 L 0,262 C 35.587018069173936,297.0440270808002 71.17403613834787,332.0880541616004 108,316 C 144.82596386165213,299.9119458383996 182.89087351578246,232.69181043439846 214,208 C 245.10912648421754,183.30818956560154 269.2624697985224,201.1447041008057 301,233 C 332.7375302014776,264.8552958991943 372.0592472901281,310.72937316237864 405,301 C 437.9407527098719,291.27062683762136 464.50054104096523,225.93780324967966 503,222 C 541.4994589590348,218.06219675032034 591.9385885460108,275.5194138389026 632,288 C 672.0614114539892,300.4805861610974 701.7451047749914,267.9845413947097 727,249 C 752.2548952250086,230.0154586052903 773.0809923540236,224.54242058225847 808,239 C 842.9190076459764,253.45757941774153 891.9309258089145,287.8457762762564 932,282 C 972.0690741910855,276.1542237237436 1003.1953044103184,230.07447431271586 1031,239 C 1058.8046955896816,247.92552568728414 1083.2878565498115,311.8563264728803 1119,314 C 1154.7121434501885,316.1436735271197 1201.6532693904353,256.50021979576303 1236,254 C 1270.3467306095647,251.49978020423697 1292.0990658884473,306.14279434406774 1324,317 C 1355.9009341115527,327.85720565593226 1397.9504670557762,294.92860282796613 1440,262 L 1440,600 L 0,600 Z"
      );
    }
    25% {
      d: path(
        "M 0,600 L 0,262 C 43.86067469532124,286.2720425648871 87.72134939064247,310.5440851297742 119,301 C 150.27865060935753,291.4559148702258 168.97527713275133,248.09570204579032 196,249 C 223.02472286724867,249.90429795420968 258.3775420783522,295.0731066870647 296,300 C 333.6224579216478,304.9268933129353 373.51455455383973,269.6118712059511 408,244 C 442.48544544616027,218.3881287940489 471.5642397062886,202.47940848913098 505,215 C 538.4357602937114,227.52059151086902 576.228486621006,268.4704948375249 614,271 C 651.771513378994,273.5295051624751 689.5218138096875,237.63861216076947 728,236 C 766.4781861903125,234.36138783923053 805.6842581402445,266.9750565193971 836,290 C 866.3157418597555,313.0249434806029 887.7411536293349,326.4611617616419 918,307 C 948.2588463706651,287.5388382383581 987.3511273424158,235.18029643403514 1025,230 C 1062.6488726575842,224.81970356596486 1098.8543370010022,266.8176525022174 1129,263 C 1159.1456629989978,259.1823474977826 1183.2315246535763,209.5490935570953 1217,208 C 1250.7684753464237,206.4509064429047 1294.2195643846926,252.98597326940137 1333,270 C 1371.7804356153074,287.01402673059863 1405.8902178076537,274.5070133652993 1440,262 L 1440,600 L 0,600 Z"
      );
    }
    50% {
      d: path(
        "M 0,600 L 0,262 C 45.27259546092452,249.44455082971197 90.54519092184904,236.88910165942394 122,246 C 153.45480907815096,255.11089834057606 171.09183177352833,285.88814419201617 204,287 C 236.90816822647167,288.11185580798383 285.08748198403765,259.55832157251126 326,243 C 366.91251801596235,226.44167842748874 400.5582402903211,221.87856951793873 430,231 C 459.4417597096789,240.12143048206127 484.67955685467757,262.92740035573394 512,263 C 539.3204431453224,263.07259964426606 568.7235322909681,240.41182905912558 599,231 C 629.2764677090319,221.58817094087442 660.4263139814498,225.4252834077637 701,251 C 741.5736860185502,276.5747165922363 791.571211783233,323.88703730981973 828,315 C 864.428788216767,306.11296269018027 887.2888388856177,241.02656735295727 915,211 C 942.7111611143823,180.97343264704273 975.2734326742957,186.00669327835124 1018,219 C 1060.7265673257043,251.99330672164876 1113.617430417199,312.94665953363784 1145,307 C 1176.382569582801,301.05334046636216 1186.256845656908,228.20666858709748 1216,228 C 1245.743154343092,227.79333141290252 1295.3551869551693,300.2266661179722 1336,318 C 1376.6448130448307,335.7733338820278 1408.3224065224153,298.8866669410139 1440,262 L 1440,600 L 0,600 Z"
      );
    }
    75% {
      d: path(
        "M 0,600 L 0,262 C 36.53328325133121,290.3732312607079 73.06656650266243,318.74646252141576 111,313 C 148.93343349733757,307.25353747858424 188.26701724068153,267.3873811750448 219,268 C 249.73298275931847,268.6126188249552 271.86536453461144,309.7040127784051 306,308 C 340.13463546538856,306.2959872215949 386.2715246208727,261.7965677113348 424,244 C 461.7284753791273,226.20343228866525 491.04853698189754,235.10971637625596 519,250 C 546.9514630181025,264.89028362374404 573.534327451537,285.76456678364127 607,297 C 640.465672548463,308.23543321635873 680.8141532119546,309.832016489179 718,311 C 755.1858467880454,312.167983510821 789.2090597006444,312.9073672596428 818,293 C 846.7909402993556,273.0926327403572 870.3496079854675,232.53851447224963 909,212 C 947.6503920145325,191.46148552775037 1001.392508357485,190.93857485135854 1043,209 C 1084.607491642515,227.06142514864146 1114.0803585845915,263.7071861223163 1139,274 C 1163.9196414154085,284.2928138776837 1184.2860573041485,268.2326806593764 1221,270 C 1257.7139426958515,271.7673193406236 1310.7754121988148,291.3620912401782 1350,293 C 1389.2245878011852,294.6379087598218 1414.6122939005927,278.3189543799109 1440,262 L 1440,600 L 0,600 Z"
      );
    }
    100% {
      d: path(
        "M 0,600 L 0,262 C 35.587018069173936,297.0440270808002 71.17403613834787,332.0880541616004 108,316 C 144.82596386165213,299.9119458383996 182.89087351578246,232.69181043439846 214,208 C 245.10912648421754,183.30818956560154 269.2624697985224,201.1447041008057 301,233 C 332.7375302014776,264.8552958991943 372.0592472901281,310.72937316237864 405,301 C 437.9407527098719,291.27062683762136 464.50054104096523,225.93780324967966 503,222 C 541.4994589590348,218.06219675032034 591.9385885460108,275.5194138389026 632,288 C 672.0614114539892,300.4805861610974 701.7451047749914,267.9845413947097 727,249 C 752.2548952250086,230.0154586052903 773.0809923540236,224.54242058225847 808,239 C 842.9190076459764,253.45757941774153 891.9309258089145,287.8457762762564 932,282 C 972.0690741910855,276.1542237237436 1003.1953044103184,230.07447431271586 1031,239 C 1058.8046955896816,247.92552568728414 1083.2878565498115,311.8563264728803 1119,314 C 1154.7121434501885,316.1436735271197 1201.6532693904353,256.50021979576303 1236,254 C 1270.3467306095647,251.49978020423697 1292.0990658884473,306.14279434406774 1324,317 C 1355.9009341115527,327.85720565593226 1397.9504670557762,294.92860282796613 1440,262 L 1440,600 L 0,600 Z"
      );
    }
  }

  .path-2 {
    animation: pathAnim-2 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes pathAnim-2 {
    0% {
      d: path(
        "M 0,600 L 0,412 C 38.37586124714542,423.1868075258178 76.75172249429085,434.3736150516357 110,437 C 143.24827750570915,439.6263849483643 171.36897126998207,433.6923473192752 203,435 C 234.63102873001793,436.3076526807248 269.7723924257808,444.8569956712635 303,430 C 336.2276075742192,415.1430043287365 367.5414590268948,376.8796699956709 404,368 C 440.4585409731052,359.1203300043291 482.0617714666399,379.6243243460531 522,379 C 561.9382285333601,378.3756756539469 600.211455106545,356.62303262011676 634,374 C 667.788544893455,391.37696737988324 697.0924081071796,447.8835451734799 729,458 C 760.9075918928204,468.1164548265201 795.4189124647363,431.84278668596363 829,411 C 862.5810875352637,390.15721331403637 895.2319420338752,384.74530808266553 926,401 C 956.7680579661248,417.25469191733447 985.6533193997627,455.17598098337413 1025,460 C 1064.3466806002373,464.82401901662587 1114.154780367074,436.5507679838379 1146,407 C 1177.845219632926,377.4492320161621 1191.7275591319417,346.6209470812744 1224,360 C 1256.2724408680583,373.3790529187256 1306.9349831051597,430.9654436910645 1346,447 C 1385.0650168948403,463.0345563089355 1412.5325084474202,437.51727815446776 1440,412 L 1440,600 L 0,600 Z"
      );
    }
    25% {
      d: path(
        "M 0,600 L 0,412 C 26.57363416964281,414.2084126453558 53.14726833928562,416.4168252907116 86,432 C 118.85273166071438,447.5831747092884 157.98456081250032,476.5411114825094 191,468 C 224.01543918749968,459.4588885174906 250.9144884107131,413.4187287792506 292,398 C 333.0855115892869,382.5812712207494 388.35748554464726,397.78397340048843 428,402 C 467.64251445535274,406.21602659951157 491.6555694106979,399.44537761879565 523,393 C 554.3444305893021,386.55462238120435 593.0202368125608,380.4345161243289 630,391 C 666.9797631874392,401.5654838756711 702.2634833390588,428.81655788388866 735,442 C 767.7365166609412,455.18344211611134 797.925829831204,454.2992523401163 834,448 C 870.074170168796,441.7007476598837 912.0331973361245,429.98643275564604 943,429 C 973.9668026638755,428.01356724435396 993.941380824298,437.75501663729926 1029,429 C 1064.058619175702,420.24498336270074 1114.2012793666831,392.99350069515685 1148,376 C 1181.7987206333169,359.00649930484315 1199.25350170897,352.2709805820731 1225,356 C 1250.74649829103,359.7290194179269 1284.7847137974372,373.9225769765506 1322,385 C 1359.2152862025628,396.0774230234494 1399.6076431012814,404.0387115117247 1440,412 L 1440,600 L 0,600 Z"
      );
    }
    50% {
      d: path(
        "M 0,600 L 0,412 C 38.11313056890312,420.60878057501463 76.22626113780623,429.2175611500292 110,428 C 143.77373886219377,426.7824388499708 173.20808601767823,415.73853597489773 210,413 C 246.79191398232177,410.26146402510227 290.9413947914809,415.82829495037976 325,416 C 359.0586052085191,416.17170504962024 383.02633481639833,410.94828422358336 408,418 C 432.97366518360167,425.05171577641664 458.9532659429258,444.37856815528676 498,427 C 537.0467340570742,409.62143184471324 589.1606014118981,355.53744315526967 628,361 C 666.8393985881019,366.46255684473033 692.4043284094812,431.4716592236345 728,448 C 763.5956715905188,464.5283407763655 809.2220849501767,432.5759199501923 841,415 C 872.7779150498233,397.4240800498077 890.707331789812,394.2246609755962 925,390 C 959.292668210188,385.7753390244038 1009.9485878905753,380.52543614742314 1047,398 C 1084.0514121094247,415.47456385257686 1107.4983166478871,455.67359443471133 1140,465 C 1172.5016833521129,474.32640556528867 1214.0581455178765,452.7801861137316 1244,431 C 1273.9418544821235,409.2198138862684 1292.2691012806067,387.2056611103624 1323,384 C 1353.7308987193933,380.7943388896376 1396.8654493596966,396.3971694448188 1440,412 L 1440,600 L 0,600 Z"
      );
    }
    75% {
      d: path(
        "M 0,600 L 0,412 C 39.64600086855437,400.3566815118515 79.29200173710873,388.713363023703 116,405 C 152.70799826289127,421.286636976297 186.47799392011942,465.50322941703973 215,463 C 243.52200607988058,460.49677058296027 266.7960225824135,411.273719308138 300,387 C 333.2039774175865,362.726280691862 376.33791575022644,363.4018933504083 414,362 C 451.66208424977356,360.5981066495917 483.85231441668077,357.11870729022894 522,371 C 560.1476855833192,384.88129270977106 604.2528265830507,416.123277488676 634,416 C 663.7471734169493,415.876722511324 679.1363792511166,384.388182755067 714,371 C 748.8636207488834,357.611817244933 803.2016564124833,362.32399149105606 835,382 C 866.7983435875167,401.67600850894394 876.0569950989496,436.31585128070884 906,456 C 935.9430049010504,475.68414871929116 986.5703631917179,480.41260338610834 1025,459 C 1063.429636808282,437.58739661389166 1089.6615521341787,390.03373517485755 1125,377 C 1160.3384478658213,363.96626482514245 1204.7834282715673,385.45245591446144 1237,407 C 1269.2165717284327,428.54754408553856 1289.2047347795522,450.15644116729675 1321,451 C 1352.7952652204478,451.84355883270325 1396.3976326102238,431.9217794163516 1440,412 L 1440,600 L 0,600 Z"
      );
    }
    100% {
      d: path(
        "M 0,600 L 0,412 C 38.37586124714542,423.1868075258178 76.75172249429085,434.3736150516357 110,437 C 143.24827750570915,439.6263849483643 171.36897126998207,433.6923473192752 203,435 C 234.63102873001793,436.3076526807248 269.7723924257808,444.8569956712635 303,430 C 336.2276075742192,415.1430043287365 367.5414590268948,376.8796699956709 404,368 C 440.4585409731052,359.1203300043291 482.0617714666399,379.6243243460531 522,379 C 561.9382285333601,378.3756756539469 600.211455106545,356.62303262011676 634,374 C 667.788544893455,391.37696737988324 697.0924081071796,447.8835451734799 729,458 C 760.9075918928204,468.1164548265201 795.4189124647363,431.84278668596363 829,411 C 862.5810875352637,390.15721331403637 895.2319420338752,384.74530808266553 926,401 C 956.7680579661248,417.25469191733447 985.6533193997627,455.17598098337413 1025,460 C 1064.3466806002373,464.82401901662587 1114.154780367074,436.5507679838379 1146,407 C 1177.845219632926,377.4492320161621 1191.7275591319417,346.6209470812744 1224,360 C 1256.2724408680583,373.3790529187256 1306.9349831051597,430.9654436910645 1346,447 C 1385.0650168948403,463.0345563089355 1412.5325084474202,437.51727815446776 1440,412 L 1440,600 L 0,600 Z"
      );
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  .wrapper {
    margin-top: -5%;
    width: 100%;
  }

  .wrapper form {
    margin: 5% 10%;
  }

  .wrapper form.disabled {
    pointer-events: none;
    opacity: 0.7;
  }

  form .dbl-field {
    display: flex;
    margin-bottom: 25px;
    justify-content: space-between;
  }

  .dbl-field .field {
    height: 50px;
    display: flex;
    position: relative;
    width: calc(100% / 2 - 15px);
  }

  .wrapper form .textInput {
    position: absolute;
    top: 50%;
    left: 18px;
    color: #ccc;
    font-size: 17px;
    pointer-events: none;
    transform: translateY(-50%);
  }

  form .field input,
  form .message textarea {
    width: 100%;
    height: 100%;
    outline: none;
    padding: 0 18px 0 48px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    color: #fff;
    background-color: transparent;
  }

  .field input:focus,
  .message textarea:focus {
    padding-left: 47px;
    border: 2px solid #234f74;
  }

  .field input:focus ~ .textInput,
  .message textarea:focus ~ .textInput {
    color: #234f74;
  }

  form .message {
    position: relative;
  }

  form .message textarea {
    min-height: 130px;
    max-height: 230px;
    max-width: 100%;
    min-width: 100%;
    padding: 15px 20px 0 48px;
  }

  input::-webkit-input-placeholder {
    color: #fff !important;
  }

  textarea::-webkit-input-placeholder {
    color: #fff !important;
  }

  form .message textarea::-webkit-scrollbar {
    width: 0px;
  }

  @media (max-width: 600px) {
    .wrapper header {
      text-align: center;
    }

    .wrapper form {
      margin: 35px 20px;
    }

    form .dbl-field {
      flex-direction: column;
      margin-bottom: 0px;
    }

    form .dbl-field .field {
      width: 100%;
      height: 45px;
      margin-bottom: 20px;
    }

    form .message textarea {
      resize: none;
    }
  }

  @media screen and (max-width: 998px) {
    margin-top: 0;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  .btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    border: none;
    background-color: transparent;
  }

  .btn div {
    letter-spacing: 2px;
    font-weight: bold;
    background: #fff;
    border-radius: 2rem;
    color: #234f74;
    padding: 1rem;
  }

  .btn::before {
    content: "";
    z-index: 1;
    background-color: #fff;
    border: 2px solid white;
    border-radius: 2rem;
    width: 110%;
    height: 100%;
    position: absolute;
    transform: rotate(10deg);
    transition: 0.5s;
    opacity: 0.2;
  }

  .btn:hover {
    cursor: pointer;
    filter: brightness(1.1);
    transform: scale(1.1);
  }

  .btn:hover::before {
    transform: rotate(0deg);
    opacity: 1;
    z-index: -1;
  }

  .btn .submitMessage {
    color: #234f74;
    transform: translateX(-200%);
    transition: 0.5s;
    width: 0;
    opacity: 0;
  }

  .btn:hover .submitMessage {
    width: 25px;
    transform: translateX(0%);
    opacity: 1;
  }
`;

export const FooterContainer = styled.div`
  margin-top: -5%;

  .content .links {
    display: flex;
    justify-content: space-around;
    padding-bottom: 5%;
  }

  .content .icon {
    margin-top: 5%;
    width: 100%;
    position: relative;
  }

  .content .icon img {
    position: relative;
    left: 5%;
    width: 15%;
  }

  .content .icon:after {
    content: "";
    display: block;
    position: absolute;
    right: 0px;
    left: 25%;
    top: 50%;
    height: 1px;
    background: #fff;
  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
  }

  li {
    margin: 0 4rem;
  }

  span {
    font-size: 40px;
    border-bottom: 1px solid #fff;
    color: #fff;
  }

  .content .links a,
  h4 {
    display: block;
    color: #234f74;
    font-size: 1.5rem;
    font-weight: 400;
    text-decoration: none;
    position: relative;
  }

  .page {
    margin-top: 0.5rem;
  }

  .midias {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 0.5rem;
  }

  .facebook {
    margin: 0 0.2rem 0 0;
    border-radius: 5px;
    width: 36px;
    height: 36px;
    background-color: #3b5998;
  }

  .twitter {
    margin: 0 0.2rem;
    border-radius: 5px;
    width: 36px;
    height: 36px;
    background-color: #000000;
  }

  .instagram {
    margin: 0 0.2rem;
    border-radius: 5px;
    width: 36px;
    height: 36px;
    background-color: #ea2c59;
  }

  .youtube {
    margin: 0 0.2rem;
    border-radius: 5px;
    width: 36px;
    height: 36px;
    background-color: #a82400;
  }

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #fff;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3% 10%;
  }

  .row .copy {
    display: flex;
    justify-content: flex-start;
  }

  h5 {
    margin: 0 1rem 2rem;
    color: #fff;
    font-weight: 400;
    font-size: 80%;
  }

  .degabrieldev {
    width: 20%;
  }

  .degabrieldev img {
    width: 100%;
  }

  @media (max-width: 992px) {
    .container .content .icon img {
      width: 30%;
    }

    .container .content .icon:after {
      left: 35%;
    }

    .container .content .links {
      display: flex;
      flex-direction: column;
    }

    ul {
      flex-direction: column;
    }

    li {
      margin: 1rem;
    }

    .degabrieldev {
      width: 40%;
    }
  }
`;
