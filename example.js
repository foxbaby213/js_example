//�϶�ͼƬ
//��Դhttp://www.jq22.com/webqd6670
//��ֹͼƬ�����͸event.stopPropagation();
//��������͸��ӦDIV��pointer-events: none;
$(function () {
	var drag = function (obj) {

		obj.bind("mousedown", start);

		function start(event) {
			if (event.button == 0) { //�ж��Ƿ���������
				/*
				 * clientX��clientY������굱ǰ�ĺ�������
				 * offset()�÷������صĶ�����������������ԣ�top �� left�������ؼơ��˷���ֻ�Կɼ�Ԫ����Ч��
				 * bind()���¼���ͬ��unbind��󶨣���Ч����ʵ��������Ҫ��󶨣���������ɿ�����קЧ����Ȼ����
				 * getX��ȡ��ǰ��������Ͷ�������Ļ������֮�Ҳ����left��ֵ��
				 * getY��getXͬ��������������ֵ�����������ڶ���Ķ�λ����Ϊ��ק��������ק��������λ���ǲ����
				 */
				gapX = event.clientX - obj.offset().left;
				gapY = event.clientY - obj.offset().top;
				//movemove�¼�����󶨵�$(document)�ϣ�����ƶ�����������Ļ�ϵ�
				$(document).bind("mousemove", move);
				//�˴���$(document)���Ը�Ϊobj
				$(document).bind("mouseup", stop);
			}
			return false; //��ֹĬ���¼���ð��
		}

		function move(event) {
			obj.css({
				"left": (event.clientX - gapX) + "px",
				"top": (event.clientY - gapY) + "px"
			});
			return false; //��ֹĬ���¼���ð��
		}

		function stop() {
			//��󶨣���һ���ܱ�Ҫ��ǰ���н���
			$(document).unbind("mousemove", move);
			$(document).unbind("mouseup", stop);

		}
	}
	obj = $("#imgsrc");
	drag(obj); //����ı�����jQuery���󣬷����ܵ���jQuery���Զ��庯��
})