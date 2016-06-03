/**
 * @fbielejec
 */

import $ from 'jquery'

//---MODULE EXPORTS---//

const rootURL = "http://localhost:8080";

const settings = {
  attribute: "attribute",
  burnin: "burnin",
  nslices: "nslices",
  mrsd: "mrsd"
};

function getSettings() {
    return $.ajax({
        type: 'GET',
        url: rootURL + '/settings',
        dataType: "json"
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR IN GET SETTINGS");
      });
  }

function getSetting(id) {
    return $.ajax({
        type: 'GET',
        url: rootURL + '/settings/' + id,
        dataType: "json"
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR IN GET SETTING");
      });
  }

function putSetting(id, value) {
    return $.ajax({
        type: 'PUT',
        url: rootURL + '/settings',
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify({
          "id": id,
          "value": value
        })
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR IN PUT SETTING ID " + id);
      });
  }

function putTrees(content) {
    return $.ajax({
        type: 'PUT',
        url: rootURL + '/trees',
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify({
          "input": content
        })
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR IN PUT TREES");
      });
  }

function getAttributes() {
    return $.ajax({
        type: 'GET',
        url: rootURL + '/attributes',
        dataType: "json",
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR IN GET ATTRIBUTES");
      });
  }

function getnTrees() {
    return $.ajax({
        type: 'GET',
        url: rootURL + '/ntrees',
        dataType: "json",
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("ERROR IN GET N TREES");
      });
  }

export {
  rootURL,
  settings,
  getSettings,
  getSetting,
  putSetting,
  putTrees,
  getAttributes,
  getnTrees
};
