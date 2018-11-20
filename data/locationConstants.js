/**
 * const locations = [
 *      [
 *          "1",                // ID
 *          "0",                // Parent ID
 *          "Central Admin"     // Text
 *      ]
 * ]
 */


const locations = [
    [
        "1",
        "0",
        "Central Admin"
    ],
    [
        "PT08.04.000",
        "1",
        "Accounts Payable"
    ],
    [
        "PT08.05.000",
        "1",
        "Accounts Receivable/Payroll"
    ],
    [
        "PT08.06.000",
        "1",
        "Central Admin Dir"
    ],
    [
        "PT08.30.000",
        "1",
        "Central Office Administration"
    ],
    [
        "PT08.08.000",
        "1",
        "Executive Dir"
    ],
    [
        "PT08.03.000",
        "1",
        "Fiscal Manager"
    ],
    [
        "PT08.01.000",
        "1",
        "Fixed Assets"
    ],
    [
        "PT08.15.000",
        "1",
        "MIS"
    ],
    [
        "PT08.21.000",
        "1",
        "Personnel"
    ],
    [
        "PT08.23.000",
        "1",
        "Purchasing"
    ],
    [
        "PT08.24.000",
        "1",
        "Warehouse"
    ],
    [
        "2",
        "0",
        "Parks"
    ],
    [
        "PT08.20.002",
        "2",
        "Marketing and Revenue"
    ],
    [
        "PT08.18.000",
        "2",
        "Outdoor Grants"
    ],
    [
        "PT08.17.000",
        "2",
        "Park Operations"
    ],
    [
        "PT08.20.001",
        "2",
        "Parks Admin"
    ],
    [
        "PT08.20.000",
        "2",
        "Parks Director"
    ],
    [
        "PT08.19.000",
        "2",
        "Planning & Development"
    ],
    [
        "PT08.22.000",
        "2",
        "Program Services"
    ],
    [
        "r1",
        "2",
        "Region 1"
    ],
    [
        "PT16.00.000",
        "r1",
        "Devils Den"
    ],
    [
        "PT03.00.000",
        "r1",
        "Hobbs"
    ],
    [
        "PT23.00.000",
        "r1",
        "Lake Catherine"
    ],
    [
        "PT25.00.000",
        "r1",
        "Lake Dardanelle"
    ],
    [
        "PT27.00.000",
        "r1",
        "Lake Fort Smith"
    ],
    [
        "PT28.00.000",
        "r1",
        "Lake Ouachita"
    ],
    [
        "PT36.00.000",
        "r1",
        "Mount Nebo"
    ],
    [
        "PT45.00.000",
        "r1",
        "Prarie Grove"
    ],
    [
        "PT48.00.000",
        "r1",
        "Region 1 Office"
    ],
    [
        "PT58.00.000",
        "r1",
        "Withrow Springs"
    ],
    [
        "r2",
        "2",
        "Region 2"
    ],
    [
        "PT06.00.000",
        "r2",
        "Bull Shoals"
    ],
    [
        "PT64.00.000",
        "r2",
        "Historic Davidsonville"
    ],
    [
        "PT22.00.000",
        "r2",
        "Jacksonport"
    ],
    [
        "PT44.00.000",
        "r2",
        "LWRM"
    ],
    [
        "PT24.00.000",
        "r2",
        "Lake Charles"
    ],
    [
        "PT32.00.000",
        "r2",
        "Mammoth Spring"
    ],
    [
        "PT42.00.000",
        "r2",
        "Pinnacle Mountain"
    ],
    [
        "PT43.00.000",
        "r2",
        "Plantation AG"
    ],
    [
        "PT62.00.000",
        "r2",
        "Powhatan Courthouse"
    ],
    [
        "PT49.00.000",
        "r2",
        "Region 2 Office"
    ],
    [
        "PT54.00.000",
        "r2",
        "Toltec Mounds"
    ],
    [
        "PT59.00.000",
        "r2",
        "Woolly Hollow"
    ],
    [
        "r3",
        "2",
        "Region 3"
    ],
    [
        "PT02.00.000",
        "r3",
        "Arkansas Post"
    ],
    [
        "PT07.00.000",
        "r3",
        "Cane Creek"
    ],
    [
        "PT12.00.000",
        "r3",
        "Crowleys Ridge"
    ],
    [
        "PT15.00.000",
        "r3",
        "Delta Heritage"
    ],
    [
        "PT19.00.000",
        "r3",
        "Hampson Museum"
    ],
    [
        "PT61.00.000",
        "r3",
        "Lake Chicot"
    ],
    [
        "PT26.00.000",
        "r3",
        "Lake Frierson"
    ],
    [
        "PT29.00.000",
        "r3",
        "Lake Poinsett"
    ],
    [
        "PT69.00.000",
        "r3",
        "Mississippi River"
    ],
    [
        "PT40.00.000",
        "r3",
        "Parkin"
    ],
    [
        "PT50.00.000",
        "r3",
        "Region 3 Office"
    ],
    [
        "PT55.00.000",
        "r3",
        "Village Creek"
    ],
    [
        "r4",
        "2",
        "Region 4"
    ],
    [
        "PT01.00.000",
        "r4",
        "AMNR"
    ],
    [
        "PT10.00.000",
        "r4",
        "Cossatot River"
    ],
    [
        "PT11.00.000",
        "r4",
        "Crater of Diamond"
    ],
    [
        "PT13.00.000",
        "r4",
        "Daisy"
    ],
    [
        "PT38.00.000",
        "r4",
        "Historic Washington"
    ],
    [
        "PT31.00.000",
        "r4",
        "Logoly"
    ],
    [
        "PT33.00.000",
        "r4",
        "Millwood"
    ],
    [
        "PT34.00.000",
        "r4",
        "Moro Bay"
    ],
    [
        "PT51.00.000",
        "r4",
        "Region 4 Office"
    ],
    [
        "PT57.00.000",
        "r4",
        "White Oak Lake"
    ],
    [
        "r5",
        "2",
        "Region 5"
    ],
    [
        "PT14.00.000",
        "r5",
        "DeGray Lake"
    ],
    [
        "PT35.00.000",
        "r5",
        "Mount Magazine"
    ],
    [
        "PT39.00.000",
        "r5",
        "Ozark Folk Center"
    ],
    [
        "PT41.00.000",
        "r5",
        "Petit Jean"
    ],
    [
        "PT46.00.000",
        "r5",
        "Queen Wihelmina"
    ],
    [
        "PT70.00.000",
        "r5",
        "Region 5 Office"
    ],
    [
        "3",
        "0",
        "Tourism"
    ],
    [
        "PT08.07.000",
        "3",
        "Communications"
    ],
    [
        "PT08.25.000",
        "3",
        "Development"
    ],
    [
        "PT08.11.000",
        "3",
        "Group Travel"
    ],
    [
        "PT08.12.000",
        "3",
        "Research"
    ],
    [
        "PT08.26.000",
        "3",
        "Tourism Director"
    ],
    [
        "wc",
        "3",
        "Welcome Centers"
    ],
    [
        "3fa",
        "3f",
        "Bentonville"
    ],
    [
        "3fb",
        "3f",
        "Blytheville"
    ],
    [
        "3fc",
        "3f",
        "Corning"
    ],
    [
        "3fd",
        "3f",
        "El Dorado"
    ],
    [
        "3fe",
        "3f",
        "Fort Smith"
    ],
    [
        "3ff",
        "3f",
        "Harrison"
    ],
    [
        "3fg",
        "3f",
        "Helena"
    ],
    [
        "3fh",
        "3f",
        "Lake Village"
    ],
    [
        "3fi",
        "3f",
        "Mammoth Springs"
    ],
    [
        "3fj",
        "3f",
        "Red River"
    ],
    [
        "3fk",
        "3f",
        "Siloam Springs"
    ],
    [
        "3fl",
        "3f",
        "Texarkana"
    ],
    [
        "3fm",
        "3f",
        "West Memphis"
    ],
    [
        "PT08.14.000",
        "0",
        "Keep AR Beautiful"
    ],
    [
        "PT71.00.000",
        "0",
        "War Memorial Stadium"
    ]
]