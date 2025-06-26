let itemCount = 0;
const buyerMap = {
  1: {
    Gstin: "33AAACS7032B1ZZ",
    LglNm: "TVS MOTOR COMPANY LTD",
    Addr1: "PB NO-4 HARITHA HOSUR",
    Addr2: "TAMILNADU",
    Loc: "TAMILNADU",
    Pin: 600006,
    Pos: "33",
    Stcd: "33",
    Ph: null,
    Em: null
  },
  2: {
    Gstin: "29AAACS7032B1ZO",
    LglNm: "TVS MOTOR COMPANY LTD",
    Addr1: "POST BOX 1 KADAKOLA POST,BYTHALI KARNATAK",
    Addr2: "KARNATAKA",
    Loc: "KARNATAKA",
    Pin: 591287,
    Pos: "29",
    Stcd: "29",
    Ph: null,
    Em: null
  },
  3: {
    Gstin: "02AAACS7032B1Z4",
    LglNm: "TVS MOTOR COMPANY LTD",
    Addr1: "HIMACHAL PRADESH",
    Addr2: "HIMACHAL PRADESH",
    Loc: "HIMACHAL PRADESH",
    Pin: 176052,
    Pos: "02",
    Stcd: "02",
    Ph: null,
    Em: null
  },
  4: {
    Gstin: "36AAACB5861B1Z1",
    LglNm: "BERAR FINANCE LTD",
    Addr1:
      "2N, 2, WARANGAL CITY CENTER, MULGU ROAD, INDUSTRIAL ETATE,Hanumakonda",
    Addr2: "WARANGAL",
    Loc: "WARANGAL",
    Pin: 503002,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  5: {
    Gstin: "36AFHFS4680J1ZH",
    LglNm: "SAVERA AUTOCRAFT LLP",
    Addr1: "PLOT NO 22/5-3,NH 7",
    Addr2: "KAMAREDDY",
    Loc: "KAMAREDDY",
    Pin: 503111,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  6: {
    Gstin: "36AAACS7018R1ZU",
    LglNm: "SHRIRAM FINANCE LIMITED",
    Addr1: "3-6-478,4TH FLOOR,ANAND ESTATES,LIBERTY ROAD,HIMAYATH NAGAR",
    Addr2: " 3-6-478,4TH FLOOR,ANAND ESTATES,LIBERTY ROAD,HIMAYATH NAGAR",
    Loc: "HYDERABAD",
    Pin: 500029,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  7: {
    Gstin: "36AADCT0724A1ZY",
    LglNm: "TVS CREDIT SERVICES LIMITED",
    Addr1: "KARIMNAGAR",
    Addr2: "KARIMNAGAR",
    Loc: "KARIMNAGAR",
    Pin: 505001,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  8: {
    Gstin: "33AAJFH7551C1ZL",
    LglNm: "HARITA INSURANCE BROKING LLP",
    Addr1:
      "NO 29,JAYALAKSHMI ESTATES,SECOND FLOOR,HADDOWS ROAD,NANGAMBAKKAM,CHENNAI",
    Addr2: "CHENNAI",
    Loc: "CHENNAI",
    Pin: 600006,
    Pos: "33",
    Stcd: "33",
    Ph: null,
    Em: null
  },
  9: {
    Gstin: "36BPSPK8565G1Z6",
    LglNm: "SRI SAI MOTORS",
    Addr1: "3-39/4/E2,BANSWADA ROAD,PITLAM",
    Addr2: "PITLAM",
    Loc: "PITLAM",
    Pin: 503310,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  10: {
    Gstin: "36AAKCA3283E1ZQ",
    LglNm: "ADARSHA MOTOR SALES PRIVATE LIMITED",
    Addr1: "8-6-301/18,BYPASS ROAD,KARIMNAGAR",
    Addr2: "KARIMNAGAR",
    Loc: "KARIMNAGAR",
    Pin: 505001,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  11: {
    Gstin: "36BCUPG1861Q1ZT",
    LglNm: "AKSHAYA MOTORS",
    Addr1: "14-84/1/A,OPPOSITE HANUMAN MANDIR,BALKONDA",
    Addr2: "BALKONDA",
    Loc: "BALKONDA",
    Pin: 503217,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  12: {
    Gstin: "36AAACI1314G1Z4",
    LglNm: "INDUSIND BANK LTD",
    Addr1: "CONSUMER FINANCE DIVISION CONSUMER FINANCE DIVISION",
    Addr2: "SECUNDERABAD",
    Loc: "SECUNDERABAD",
    Pin: 500003,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  13: {
    Gstin: "27AAECI3370G1ZN",
    LglNm: "INDICOSMIC CAPITAL PVT.LTD",
    Addr1:
      "OFFICE NO 101,BABA HOUSE NEXT TO WEH METRO STATION ANDHERI EAST,MUMBAI",
    Addr2: "MUMBAI",
    Loc: "MUMBAI",
    Pin: 400093,
    Pos: "27",
    Stcd: "27",
    Ph: null,
    Em: null
  },
  14: {
    Gstin: "36ADWFS8368L1ZT",
    LglNm: "SRI SIDDARAMESHWARA AUTO MOTIVES",
    Addr1:
      "8-135/1,OPP GOVT HIGH SCHOOL,BHIKNOOR MAIN ROAD 8-135/1,OPP GOVT HIGH",
    Addr2: "SCHOOL,BHIKNOOR MAIN ROAD",
    Loc: "BHIKNOOR",
    Pin: 503101,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  15: {
    Gstin: "36ABVPU7412L1ZS",
    LglNm: "SRI VINAYAKA MOTORS",
    Addr1: "JANNEPALLY ROAD   8-194/1/B,MAIN ROAD,NAVIPET",
    Addr2: "NAVIPET",
    Loc: "NAVIPET",
    Pin: 503245,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  16: {
    Gstin: "36AAMCS8857L2ZC",
    LglNm: "SBI General Insurance company limited",
    Addr1: "Ozone Commercial Complex,3rd,Panjagutta Main Road,Hyderabad",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500082,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  }
};
const predefinedItems = {
  WARRANTY: {
    desc: "WARRANTY",
    hsn: "87141090",
    gst: 28,
    isIGST: true,
    IsServc: "N"
  },
  BATTERY: {
    desc: "BATTERY",
    hsn: "85072000",
    gst: 18,
    isIGST: false,
    IsServc: "N"
  },
  "ENGINE OIL": {
    desc: "ENGINE OIL",
    hsn: "27101980",
    gst: 18,
    isIGST: true,
    IsServc: "N"
  },
  "PETROL VEHICLE": {
    desc: "TVS RAIDER 125",
    hsn: "87112029",
    gst: 28,
    isIGST: false,
    IsServc: "N"
  },
  "IQUBE VEHICLE": {
    desc: "TVS IQUBE",
    hsn: "87112029",
    gst: 5,
    isIGST: false,
    IsServc: "N"
  },
  "PARTS SALES": {
    desc: "PARTS SALES",
    hsn: "84099191",
    gst: 28,
    isIGST: false,
    IsServc: "N"
  },
  COMMISION: {
    desc: "COMMISION",
    hsn: "996211",
    gst: 18,
    isIGST: false,
    IsServc: "Y"
  },
  "FSC CLAIM FROM TVSM": {
    desc: "FSC CLAIM FROM TVSM",
    hsn: "997161",
    gst: 18,
    isIGST: true,
    IsServc: "Y"
  },
  LABOUR: {
    desc: "LABOUR",
    hsn: "9954",
    gst: 18,
    isIGST: false,
    IsServc: "Y"
  }
};

function addItem() {
  itemCount++;
  const container = document.getElementById("itemsContainer");
  const itemDiv = document.createElement("div");
  itemDiv.className = "item-block";
  const options = Object.keys(predefinedItems)
    .map((key) => `<option value="${key}">${key}</option>`)
    .join("");
  const selectHTML = `
    <label>Choose Item:
      <select class="itemSelect" onchange="onItemSelect(this)">
        <option value="">-- Select Item --</option>
        ${options}
        <option value="custom">+ New Item</option>
      </select>
    </label><br>
  `;
  itemDiv.innerHTML = `
    <h4>Item ${itemCount}</h4>
    <button type="button" class="delete-btn" onclick="this.parentElement.remove();">Delete</button>
    ${selectHTML}
    Description: <input type="text" class="itemDesc" value="">
    HSN Code: <input type="text" class="hsnCode" value="">
    Quantity: <input type="number" class="qty" value="1" oninput="updateGST(this)">
   <input type="text" class="IsServc hidden" value="" disabled>
  <input type="text" class="unit hidden" value="NOS" disabled>
    Unit Price: <input type="number" step="0.01" class="unitPrice" value="0" oninput="updateGST(this)">
    GST Rate (%): <input type="number" step="0.01" class="gstRate" value="18" oninput="updateGST(this)">
    
    <div class="igstDiv">IGST Amount: <input type="number" step="0.01" class="igstAmt" disabled></div>
    <div class="cgstSgstDiv" style="display:none;">
      CGST Amount: <input type="number" step="0.01" class="cgstAmt" disabled>
      SGST Amount: <input type="number" step="0.01" class="sgstAmt" disabled>
    </div>

    Total Item Value: <input type="number" step="0.01" class="totItemVal" readonly>
  `;
  container.appendChild(itemDiv);
}

function onItemSelect(selectEl) {
  const block = selectEl.closest(".item-block");
  const selected = selectEl.value;
  const descField = block.querySelector(".itemDesc");
  const hsnField = block.querySelector(".hsnCode");
  const gstField = block.querySelector(".gstRate");
  const igstDiv = block.querySelector(".igstDiv");
  const cgstSgstDiv = block.querySelector(".cgstSgstDiv");
  const IsServc = block.querySelector(".IsServc");
  if (selected === "custom") {
    descField.value = "";
    hsnField.value = "";
    gstField.value = "18";
    igstDiv.style.display = "block";
    cgstSgstDiv.style.display = "none";
  } else {
    const item = predefinedItems[selected];
    descField.value = item.desc;
    hsnField.value = item.hsn;
    gstField.value = item.gst;
    if (item.isIGST) {
      igstDiv.style.display = "block";
      cgstSgstDiv.style.display = "none";
    } else {
      igstDiv.style.display = "none";
      cgstSgstDiv.style.display = "block";
    }
  }
  const item = predefinedItems[selected];
  IsServc.value = item.IsServc;
  updateGST(selectEl);
}

function updateGST(el) {
  const block = el.closest(".item-block");
  const qty = parseFloat(block.querySelector(".qty").value) || 0;
  const unitPrice = parseFloat(block.querySelector(".unitPrice").value) || 0;
  const gstRate = parseFloat(block.querySelector(".gstRate").value) || 0;
  const total = qty * unitPrice;
  const igstField = block.querySelector(".igstAmt");
  const cgstField = block.querySelector(".cgstAmt");
  const sgstField = block.querySelector(".sgstAmt");
  const igstDiv = block.querySelector(".igstDiv");
  const cgstSgstDiv = block.querySelector(".cgstSgstDiv");
  let totalVal = total;
  if (igstDiv.style.display !== "none") {
    const igst = (total * gstRate) / 100;
    igstField.value = igst.toFixed(2);
    if (cgstField) cgstField.value = "0.00";
    if (sgstField) sgstField.value = "0.00";
    totalVal += igst;
  } else {
    const halfGST = gstRate / 2;
    const cgst = (total * halfGST) / 100;
    const sgst = (total * halfGST) / 100;
    cgstField.value = cgst.toFixed(2);
    sgstField.value = sgst.toFixed(2);
    igstField.value = "0.00";
    totalVal += cgst + sgst;
  }
  block.querySelector(".totItemVal").value = totalVal.toFixed(2);
  // 🔽 Add this part to update overall totals
  let totalIgst = 0,
    totalCgst = 0,
    totalSgst = 0,
    totalAmount = 0;
  document.querySelectorAll(".item-block").forEach((item) => {
    totalIgst += parseFloat(item.querySelector(".igstAmt")?.value) || 0;
    totalCgst += parseFloat(item.querySelector(".cgstAmt")?.value) || 0;
    totalSgst += parseFloat(item.querySelector(".sgstAmt")?.value) || 0;
    totalAmount += parseFloat(item.querySelector(".totItemVal")?.value) || 0;
  });
  document.querySelector("#total-igst").value = totalIgst.toFixed(2);
  document.querySelector("#total-cgst").value = totalCgst.toFixed(2);
  document.querySelector("#total-sgst").value = totalSgst.toFixed(2);
  document.querySelector("#total-amount").value = totalAmount.toFixed(2);
}

function populateBuyerDetails() {
  const selectedKey = document.getElementById("buyerSelector").value;
  const buyer = buyerMap[selectedKey];
  document.getElementById("buyerGstin").value = buyer.Gstin;
  document.getElementById("buyerName").value = buyer.LglNm;
  document.getElementById("buyerAddr1").value = buyer.Addr1;
  document.getElementById("buyerAddr2").value = buyer.Addr2;
  document.getElementById("buyerLoc").value = buyer.Loc;
  document.getElementById("buyerPin").value = buyer.Pin;
  document.getElementById("buyerPos").value = buyer.Pos;
  document.getElementById("buyerStcd").value = buyer.Stcd;
}

function buildBuyerDropdown() {
  const buyerSelector = document.getElementById("buyerSelector");
  buyerSelector.innerHTML = ""; // Clear existing options
  for (const key in buyerMap) {
    const buyer = buyerMap[key];
    const option = document.createElement("option");
    option.value = key;
    option.textContent = `${buyer.Gstin} - ${buyer.LglNm}`;
    buyerSelector.appendChild(option);
  }
}

function generateJSON() {
  let assVal = 0;
  let cgstVal = 0;
  let sgstVal = 0;
  let igstVal = 0;
  let totInvVal = 0;
  let docNumber = document
    .getElementById("docNo")
    .value.replace(/\s+/g, "")
    .trim();
  const invoice = {
    Version: "1.1",
    TranDtls: {
      TaxSch: "GST",
      SupTyp: "B2B",
      IgstOnIntra: "N",
      RegRev: "N",
      EcmGstin: null
    },
    DocDtls: {
      Typ: "INV",
      No: docNumber,
      Dt: document.getElementById("docDate").value
    },
    SellerDtls: {
      Gstin: document.getElementById("sellerGstin").value,
      LglNm: document.getElementById("sellerName").value,
      Addr1: document.getElementById("sellerAddr1").value,
      Addr2: null,
      Loc: document.getElementById("sellerLoc").value,
      Pin: parseInt(document.getElementById("sellerPin").value),
      Stcd: document.getElementById("sellerStcd").value,
      Ph: document.getElementById("sellerPh").value,
      Em: null
    },
    BuyerDtls: {
      Gstin: document.getElementById("buyerGstin").value,
      LglNm: document.getElementById("buyerName").value,
      Addr1: document.getElementById("buyerAddr1").value,
      Addr2: document.getElementById("buyerAddr2").value,
      Loc: document.getElementById("buyerLoc").value,
      Pin: parseInt(document.getElementById("buyerPin").value),
      Pos: document.getElementById("buyerPos").value,
      Stcd: document.getElementById("buyerStcd").value,
      Ph: null,
      Em: null
    },
    ValDtls: {},
    RefDtls: {
      InvRm: "NICGEPP2.0"
    },
    ItemList: []
  };
  const itemBlocks = document.querySelectorAll(".item-block");
  itemBlocks.forEach((block, index) => {
    const desc = block.querySelector(".itemDesc").value;
    const hsn = block.querySelector(".hsnCode").value;
    const qty = parseFloat(block.querySelector(".qty").value) || 0;
    const unit = block.querySelector(".unit").value;
    const unitPrice = parseFloat(block.querySelector(".unitPrice").value) || 0;
    const gstRate = parseFloat(block.querySelector(".gstRate").value) || 0;
    const igstAmt = parseFloat(block.querySelector(".igstAmt").value) || 0;
    const cgstAmt = parseFloat(block.querySelector(".cgstAmt").value) || 0;
    const sgstAmt = parseFloat(block.querySelector(".sgstAmt").value) || 0;
    const totItemVal =
      parseFloat(block.querySelector(".totItemVal").value) || 0;
    const itemAssVal = unitPrice * qty;
    const IsServc = block.querySelector(".IsServc").value;
    assVal += itemAssVal;
    igstVal += igstAmt;
    cgstVal += cgstAmt;
    sgstVal += sgstAmt;
    totInvVal += totItemVal;
    invoice.ItemList.push({
      SlNo: String(index + 1),
      PrdDesc: desc,
      IsServc: IsServc,
      HsnCd: hsn,
      Qty: qty,
      FreeQty: 0,
      Unit: unit,
      UnitPrice: unitPrice,
      TotAmt: itemAssVal,
      Discount: 0,
      PreTaxVal: 0,
      AssAmt: itemAssVal,
      GstRt: gstRate,
      IgstAmt: igstAmt,
      CgstAmt: cgstAmt,
      SgstAmt: sgstAmt,
      CesRt: 0,
      CesAmt: 0,
      CesNonAdvlAmt: 0,
      StateCesRt: 0,
      StateCesAmt: 0,
      StateCesNonAdvlAmt: 0,
      OthChrg: 0,
      TotItemVal: totItemVal
    });
  });
  invoice.ValDtls = {
    AssVal: parseFloat(assVal.toFixed(2)),
    IgstVal: parseFloat(igstVal.toFixed(2)),
    CgstVal: parseFloat(cgstVal.toFixed(2)),
    SgstVal: parseFloat(sgstVal.toFixed(2)),
    CesVal: 0,
    StCesVal: 0,
    Discount: 0,
    OthChrg: 0,
    RndOffAmt: 0,
    TotInvVal: parseFloat(totInvVal.toFixed(2))
  };
  document.getElementById("output").textContent = JSON.stringify(
    [invoice],
    null,
    2
  );
  downloadJSON();

  function downloadJSON() {
    const jsonText = document.getElementById("output").textContent;
    if (!jsonText.trim()) {
      alert("Please generate JSON first.");
      return;
    }
    const blob = new Blob([jsonText], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const docNo =
      document.getElementById("docNo").value.replace(/\s+/g, "").trim() ||
      "invoice";
    link.download = `${docNo}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}
window.onload = () => {
  buildBuyerDropdown?.(); // Optional, if defined elsewhere
  populateBuyerDetails?.(); // Optional, if defined elsewhere
  addItem?.(); // Optional, if defined elsewhere
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear(); // Full year (e.g., 2025)
  const formattedDate = `${day}/${month}/${year}`;
  document.getElementById("docDate").value = formattedDate;
};
