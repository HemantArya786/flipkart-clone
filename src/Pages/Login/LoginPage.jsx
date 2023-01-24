import React from "react";

function LoginPage() {
  return (
    <main id="myModal">
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">
              Recipient:
            </label>
            <input type="text" class="form-control" id="recipient-name" />
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">
              Message:
            </label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;
