import{_ as e,o as a,c as t,e as s}from"./app-cPPdcIue.js";const r={},i=s('<h1 id="mysql-interview-questions" tabindex="-1"><a class="header-anchor" href="#mysql-interview-questions" aria-hidden="true">#</a> MySQL interview questions:</h1><h2 id="_1-what-is-the-mysql-server-s-default-port" tabindex="-1"><a class="header-anchor" href="#_1-what-is-the-mysql-server-s-default-port" aria-hidden="true">#</a> 1. What is the MySQL server&#39;s default port?</h2><p>3306 is MySQL server&#39;s default port.</p><h2 id="_2-what-are-the-differences-between-char-and-varchar-data-types-in-mysql" tabindex="-1"><a class="header-anchor" href="#_2-what-are-the-differences-between-char-and-varchar-data-types-in-mysql" aria-hidden="true">#</a> 2. What are the differences between CHAR and VARCHAR data types in MySQL?</h2><h3 id="char" tabindex="-1"><a class="header-anchor" href="#char" aria-hidden="true">#</a> CHAR:</h3><ol><li>This data type is used to store character strings of a fixed length. The length can be specified in the parentheses (e.g.,CHAR(30))</li><li>If we store a string that is shorter than the specified length, MySQL will pad it with spaces; if the string is longer than the specified length, MySQL will truncate it.</li><li>CHAR is faster for data retrieval because all values are the same length.</li></ol><h3 id="varchar" tabindex="-1"><a class="header-anchor" href="#varchar" aria-hidden="true">#</a> VARCHAR:</h3><ol><li>This data type is used to store variable-length character strings. The length can be specified in the parentheses (e.g., VARCHAR(30)), which represents the maximum length.</li><li>Unlike CHAR, VARCHAR only uses as much space as necessary to store the actual content. This can save space if we are storing strings that are significantly shorter than the maximum length.</li></ol>',8),h=[i];function n(l,c){return a(),t("div",null,h)}const o=e(r,[["render",n],["__file","mysql.html.vue"]]);export{o as default};