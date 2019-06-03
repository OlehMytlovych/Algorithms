/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */

function convertHTML(str) {
    let changed = str;

    changed = changed.replace(/&/g, '&​amp;');
    changed = changed.replace(/</g, '&​lt;');
    changed = changed.replace(/>/g, '&​gt;');
    changed = changed.replace(/\"/g, '&​quot;' );
    changed = changed.replace(/\'/g, '&​apos;');

    return changed
  }
  
  document.write(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML("Dolce & Gabbana"))

/*convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Schindler's List") should return Schindler&​apos;s List.
convertHTML("<>") should return &​lt;&​gt;.
convertHTML("abc") should return abc.*/