<template>
    <div class="contact"> 
        <a id="contact"><h1 class="contact-heading">Contact</h1></a>
               <i class="fa fa-envelope" aria-hidden="true"></i>
        <div>
            <form class="contact-form" @submit.prevent="sendEmail">
                <label>Name</label>
                <input type="text" name="user_name">
                <br>
                <label>Email</label>
                <input type="email" name="user_email">
                <br>
                <label>Message</label>
                <textarea name="message"></textarea>
                <br>
                <input type="submit" value="Send">
            </form>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>

<style scooped>

</style>