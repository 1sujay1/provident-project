document.addEventListener("DOMContentLoaded", function () {
  var bookingForm = document.getElementById("hero-contact-form");
  if (!bookingForm) return;
  var successMsg = document.getElementById("success_message_col1");
  var errorMsg = document.getElementById("error_message1");
  var submitBtn = document.getElementById("contact_form_btn1");
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (successMsg) {
      successMsg.textContent = "";
      successMsg.style.display = "none";
    }
    if (errorMsg) {
      errorMsg.textContent = "";
      errorMsg.style.display = "none";
    }
    console.log("Form data:", bookingForm);
    var name = bookingForm.name.value.trim();
    var email = bookingForm.email.value.trim();
    var mobile = bookingForm.querySelector("[name=mobile]")?.value.trim() || "";
    console.log("Mobile:", mobile);
    var message = bookingForm.message?.value?.trim() || "";
    console.log({ name, email, mobile, message });
    console.log("Submitting form...");
    console.log("Using BaseURL:", BaseURL);
    console.log(submitBtn);
    if (!name || !email || !mobile) {
      if (errorMsg) {
        errorMsg.style.display = "block";
        errorMsg.style.color = "#d32f2f";
        errorMsg.textContent = "Please fill all required fields.";
      }
      return;
    }
    submitBtn.disabled = true;
    var originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = "Submitting...";
    fetch(`${BaseURL}/api/v1/client/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        project: "PURAVANKARA_CODENAME_BLISS",
        name,
        email,
        phone: mobile,
        message,
      }),
    })
      .then(function (res) {
        if (res.status !== 200) {
          throw new Error("Failed to submit. Please try again.");
        }
        return res.json();
      })
      .then(function (data) {
        if (successMsg) {
          successMsg.style.display = "block";
          successMsg.style.color = "#388e3c";
          successMsg.textContent = "Thank you! Your request has been sent.";
        }
        bookingForm.reset();
      })
      .catch(function (err) {
        if (errorMsg) {
          errorMsg.style.display = "block";
          errorMsg.style.color = "#d32f2f";
          errorMsg.textContent =
            err.message || "Submission failed. Please try again.";
        }
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var bookingForm = document.getElementById("contact-form");
  if (!bookingForm) return;
  var successMsg = document.getElementById("success_message_col2");
  var errorMsg = document.getElementById("error_message2");
  var submitBtn = document.getElementById("contact_form_btn2");
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (successMsg) {
      successMsg.textContent = "";
      successMsg.style.display = "none";
    }
    if (errorMsg) {
      errorMsg.textContent = "";
      errorMsg.style.display = "none";
    }
    console.log("Form data:", bookingForm);
    var name = bookingForm.name.value.trim();
    var email = bookingForm?.email?.value?.trim() || "";
    var mobile = bookingForm.querySelector("[name=mobile]")?.value.trim() || "";
    console.log("Mobile:", mobile);
    var secondaryPhone =
      bookingForm.querySelector("[name=secondaryNumber]")?.value.trim() || "";
    console.log("Mobile:", mobile);
    var message = bookingForm.message?.value?.trim() || "";
    console.log({ name, email, mobile, message });
    console.log("Submitting form...");
    console.log("Using BaseURL:", BaseURL);
    console.log(submitBtn);
    if (!name || !mobile) {
      if (errorMsg) {
        errorMsg.style.display = "block";
        errorMsg.style.color = "#d32f2f";
        errorMsg.textContent = "Please fill all required fields.";
      }
      return;
    }
    submitBtn.disabled = true;
    var originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = "Submitting...";
    fetch(`${BaseURL}/api/v1/client/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        project: "PURAVANKARA_CODENAME_BLISS",
        name,
        email,
        phone: mobile,
        message,
        secondaryPhone,
      }),
    })
      .then(function (res) {
        if (res.status !== 200) {
          throw new Error("Failed to submit. Please try again.");
        }
        return res.json();
      })
      .then(function (data) {
        if (successMsg) {
          successMsg.style.display = "block";
          successMsg.style.color = "#388e3c";
          successMsg.textContent = "Thank you! Your request has been sent.";
        }
        bookingForm.reset();
      })
      .catch(function (err) {
        if (errorMsg) {
          errorMsg.style.display = "block";
          errorMsg.style.color = "#d32f2f";
          errorMsg.textContent =
            err.message || "Submission failed. Please try again.";
        }
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var bookingForm = document.getElementById("modal-form");
  if (!bookingForm) return;
  var successMsg = document.getElementById("modal-success_message_col");
  var errorMsg = document.getElementById("modal-error_message");
  var submitBtn = document.getElementById("modal-submit-btn");
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (successMsg) {
      successMsg.textContent = "";
      successMsg.style.display = "none";
    }
    if (errorMsg) {
      errorMsg.textContent = "";
      errorMsg.style.display = "none";
    }
    console.log("Form data:", bookingForm);
    var name = bookingForm.name.value.trim();
    var email = bookingForm?.email?.value?.trim() || "";
    var mobile = bookingForm.querySelector("[name=mobile]")?.value.trim() || "";
    console.log("Mobile:", mobile);
    // const projectName = document.getElementById("modal-project").value;
    var secondaryPhone =
      bookingForm.querySelector("[name=secondaryNumber]")?.value.trim() || "";
    console.log("Mobile:", mobile);
    var message = bookingForm.message?.value?.trim() || "";
    console.log({ name, email, mobile, message });
    console.log("Submitting form...");
    console.log("Using BaseURL:", BaseURL);
    console.log(submitBtn);
    if (!name || !mobile) {
      if (errorMsg) {
        errorMsg.style.display = "block";
        errorMsg.style.color = "#d32f2f";
        errorMsg.textContent = "Please fill all required fields.";
      }
      return;
    }
    submitBtn.disabled = true;
    var originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = "Submitting...";
    fetch(`${BaseURL}/api/v1/client/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        project: "PURAVANKARA_CODENAME_BLISS",
        name,
        email,
        phone: mobile,
        message,
        secondaryPhone,
      }),
    })
      .then(function (res) {
        if (res.status !== 200) {
          throw new Error("Failed to submit. Please try again.");
        }
        return res.json();
      })
      .then(function (data) {
        if (successMsg) {
          successMsg.style.display = "block";
          successMsg.style.color = "#388e3c";
          successMsg.textContent = "Thank you! Your request has been sent.";
        }
        bookingForm.reset();
      })
      .catch(function (err) {
        if (errorMsg) {
          errorMsg.style.display = "block";
          errorMsg.style.color = "#d32f2f";
          errorMsg.textContent =
            err.message || "Submission failed. Please try again.";
        }
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      });
  });
});
